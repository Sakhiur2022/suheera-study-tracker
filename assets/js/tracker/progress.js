"use strict";
/* Template-method step: the progress bar + summary line. */
(function (Study) {
  Study.tracker = Study.tracker || {};

  Study.tracker.renderProgress = function renderProgress(ctx) {
    const { $, bn } = Study.dom;
    const { problems, status, statuses } = ctx;
    const [, DOING, DONE] = statuses;
    const done = problems.filter((p) => status.get(p.id) === DONE).length;
    const doing = problems.filter((p) => status.get(p.id) === DOING).length;
    const pct = Math.round((done / problems.length) * 100);
    $("bar-fill").style.width = pct + "%";
    $("progress-text").textContent =
      `${bn(done)}/${bn(problems.length)} শেষ (${bn(pct)}%) · চলছে ${bn(doing)} · বাকি ${bn(problems.length - done - doing)}`;
  };
})((window.Study = window.Study || {}));
