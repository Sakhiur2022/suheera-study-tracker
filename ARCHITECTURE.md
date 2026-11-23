# Architecture

Plain HTML/CSS/JS, no build step. Scripts are classic `<script>` files that share one global
namespace, `window.Study`, so the site works from `file://` as well as from GitHub Pages
(ES modules would not load from `file://`).

## Layout

```
assets/
  site.css                      hub-page styles (unchanged)
  css/
    tracker.css                 rules shared by every tracker page
    exam-tracker.css            rules for exercise-set trackers (ellipse, parabola, ...)
  js/
    core/                       no knowledge of trackers
      constants.js              ALL, DIFFS, STATUSES, STATUS_CLASS
      dom.js                    $, bn, esc, fillSelect
      markdown.js               tiny markdown for book text
      observable.js             Observer: createObservable()
      storage.js                Adapter over localStorage
      clipboard.js              Adapter: copyText(), copyWithFeedback()
    tracker/                    the shared tracker engine
      status-store.js           per-problem status, persisted (Observer)
      strategies.js             filter + sort Strategies
      progress.js matrix.js list.js controls.js     the render steps
      create-tracker.js         Template Method skeleton (createTracker)
    presets/
      exam-problem-tracker.js   Factory for "tuple rows" pages (ellipse, parabola)
practice/.../<page>/
  data.js                       data only
  main.js                       the page's configuration
```

## Where each pattern lives

| Pattern | Where | What it replaced |
| --- | --- | --- |
| Template Method (by composition) | `tracker/create-tracker.js` | the render pipeline copy-pasted in 3 `main.js` files |
| Strategy | `tracker/strategies.js`, each page's `view`, `sorts` | `if (sort === "imp")` branches and per-page row markup |
| Observer | `core/observable.js`, `tracker/status-store.js` | handlers calling `renderAll/renderList/renderProgress` by hand |
| Adapter | `core/storage.js`, `core/clipboard.js` | repeated `try/catch` around localStorage and two copy implementations |
| Factory | `presets/exam-problem-tracker.js` | ellipse and parabola being byte-for-byte the same logic |

## Adding a new exercise-set page (e.g. hyperbola)

1. Copy `practice/higher-math-2/conics/ellipse/` to `.../hyperbola/`.
2. Replace the data in `data.js` (`CLUSTERS`, `ROWS`).
3. In `main.js` set a **new, unique** `storageKey`.
4. Keep the same `<script>` and `<link>` tags in `index.html` (adjust the `../` depth if needed).

## Things to keep stable

The `storageKey` values (`ellipse-tracker-status-v1`, `conics-tracker-status-v1`,
`c-programming-tracker-status-v1`) hold people's saved progress. Do not rename them.
