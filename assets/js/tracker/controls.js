"use strict";
/*
 * Wires the filter bar (selects, search box, sort, reset) to the state Observer.
 * Controls only ever call state.set(); they never call a renderer directly.
 */
(function (Study) {
  Study.tracker = Study.tracker || {};

  Study.tracker.bindControls = function bindControls(ctx) {
    const { $, fillSelect } = Study.dom;
    const { state, filterDefs } = ctx;
    const selects = {};

    for (const def of filterDefs) {
      const el = $(def.selectId);
      fillSelect(el, def.options);
      el.addEventListener("change", () => state.set({ [def.key]: el.value }));
      selects[def.key] = el;
    }

    $("f-q").addEventListener("input", (e) => state.set({ q: e.target.value.trim().toLowerCase() }));
    $("f-sort").addEventListener("change", (e) => state.set({ sort: e.target.value }));
    $("f-reset").addEventListener("click", () => {
      $("f-q").value = "";
      state.set(ctx.initialState);
    });

    // Keep the <select>s showing the state (matrix clicks and reset change it from outside).
    state.subscribe((s) => {
      for (const def of filterDefs) selects[def.key].value = s[def.key];
      $("f-sort").value = s.sort;
    });
  };
})((window.Study = window.Study || {}));
