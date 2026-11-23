"use strict";
/*
 * Template-method step: the filtered, sorted problem list.
 * The per-row markup is a Strategy supplied by the page (ctx.view):
 *
 *   view = {
 *     rowBase: "",                       // class always present on the row root ("" or "prob")
 *     begin(table) -> { add(rowEl) },    // clear the table and hand back a sink
 *     createRow(problem, ctx) -> Element // row root containing an empty `.c-status` cell
 *   }
 */
(function (Study) {
  Study.tracker = Study.tracker || {};

  const rowClass = (ctx, st) =>
    [ctx.view.rowBase, Study.STATUS_CLASS[st]].filter(Boolean).join(" ");

  function visibleProblems(ctx) {
    const f = ctx.state.get();
    const list = ctx.problems.filter(
      (p) =>
        ctx.filterDefs.every((def) => def.test(p, f[def.key], ctx)) &&
        (!f.q || ctx.searchText(p).toLowerCase().includes(f.q))
    );
    const cmp = ctx.sorts[f.sort]; // no entry (e.g. "order") = keep book order
    if (cmp) list.sort(cmp);
    return list;
  }

  function createStatusSelect(ctx, p, st) {
    const sel = document.createElement("select");
    sel.setAttribute("aria-label", `${p.id} এর অবস্থা`);
    Study.dom.fillSelect(sel, ctx.statuses);
    sel.value = st;
    sel.addEventListener("change", () => ctx.status.set(p.id, sel.value));
    return sel;
  }

  Study.tracker.renderList = function renderList(ctx) {
    const { $, bn } = Study.dom;
    const list = visibleProblems(ctx);
    const sink = ctx.view.begin($("problems"));
    ctx.rows.clear();

    for (const p of list) {
      const st = ctx.status.get(p.id);
      const root = ctx.view.createRow(p, ctx);
      root.className = rowClass(ctx, st);
      root.querySelector(".c-status").appendChild(createStatusSelect(ctx, p, st));
      sink.add(root);
      ctx.rows.set(p.id, root);
    }

    $("count").textContent = `${bn(list.length)}টি সমস্যা দেখানো হচ্ছে (মোট ${bn(ctx.problems.length)})`;
    $("empty").hidden = list.length > 0;
  };

  /* Cheap update for a status change: re-colour the row without rebuilding the list. */
  Study.tracker.patchRow = function patchRow(ctx, id) {
    const root = ctx.rows.get(id);
    if (root) root.className = rowClass(ctx, ctx.status.get(id));
  };
})((window.Study = window.Study || {}));
