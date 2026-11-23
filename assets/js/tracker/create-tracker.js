"use strict";
/*
 * Template Method (via composition) + Factory.
 *
 * createTracker() owns the fixed skeleton every tracker page shares:
 *   build state  →  bind controls  →  subscribe renderers  →  first render.
 * A page only supplies the steps that vary:
 *
 *   storageKey   localStorage key for the statuses (keep it stable: it holds users' progress)
 *   problems     [{ id, cluster, diff, ... }]
 *   clusters     [{ code, name, ... }]
 *   filters      array of filter Strategies (must include one with key "cluster")
 *   searchText   (problem) -> string searched by the text box
 *   sorts        { <sort option value>: comparator }
 *   view         row Strategy (see list.js)
 *   matrixExtra  optional extra matrix columns (see matrix.js)
 *   hooks.init   optional (ctx) => void, run once before the first render
 */
(function (Study) {
  const { ALL } = Study;

  Study.createTracker = function createTracker(config) {
    const filterDefs = config.filters;
    if (!filterDefs.some((d) => d.key === "cluster")) {
      throw new Error('createTracker: a filter with key "cluster" is required (the matrix drives it)');
    }

    const problems = config.problems;
    problems.forEach((p, order) => { p.order = order; });

    const statuses = config.statuses || Study.STATUSES;
    const initialState = { q: "", sort: "order" };
    for (const def of filterDefs) initialState[def.key] = ALL;

    const ctx = {
      problems,
      clusters: config.clusters,
      diffs: config.diffs || Study.DIFFS,
      statuses,
      filterDefs,
      searchText: config.searchText,
      sorts: config.sorts || {},
      view: config.view,
      matrixExtra: config.matrixExtra || null,
      initialState,
      state: Study.createObservable(initialState), // Observer: filters / search / sort
      status: Study.createStatusStore(config.storageKey, statuses), // Observer: per-problem status
      rows: new Map(), // problem id -> row element, for cheap status patches
      clusterName: (code) => config.clusters.find((c) => c.code === code).name,
    };

    const { renderProgress, renderMatrix, renderList, patchRow, bindControls } = Study.tracker;

    bindControls(ctx);

    // Observer wiring: who re-renders when what changes.
    ctx.state.subscribe((_s, changed) => {
      if (changed.includes("cluster")) renderMatrix(ctx); // highlights the active cluster row
      renderList(ctx);
    });
    ctx.status.subscribe((_map, ids) => {
      renderProgress(ctx);
      const statusFilter = ctx.state.get().status;
      if (statusFilter !== undefined && statusFilter !== ALL) renderList(ctx); // row may leave the view
      else ids.forEach((id) => patchRow(ctx, id));
    });

    if (config.hooks && config.hooks.init) config.hooks.init(ctx);

    renderProgress(ctx);
    renderMatrix(ctx);
    renderList(ctx);
    return ctx;
  };
})((window.Study = window.Study || {}));
