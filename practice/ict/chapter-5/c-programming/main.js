"use strict";
/* C প্রোগ্রাম প্র্যাকটিস — composes the shared tracker from this page's pieces. */
(function (Study) {
  const { CLUSTERS, PROBLEMS } = Study.pageData;
  const { IMPS, IMP_RANK, PARTS } = Study.pageModel;
  const { rowView, matrixExtra, renderCross, renderReference } = Study.pageViews;
  const F = Study.filters;

  Study.createTracker({
    storageKey: "c-programming-tracker-status-v1", // keep: it holds saved progress
    clusters: CLUSTERS,
    problems: PROBLEMS,
    filters: [
      F.field("cluster", CLUSTERS.map((c) => ({ value: c.code, label: `${c.code} · ${c.name}` }))),
      F.field("diff", Study.DIFFS),
      F.field("imp", IMPS),
      F.field("part", PARTS.map((n) => ({ value: String(n), label: `অংশ ${Study.dom.bn(n)}` }))),
      F.status(),
    ],
    searchText: (p) => p.id + " " + p.title + " " + p.stmt + " " + p.pattern,
    sorts: { imp: Study.sorts.descBy((p) => IMP_RANK[p.imp]) },
    view: rowView,
    matrixExtra,
    hooks: {
      init(ctx) {
        renderCross(ctx);
        renderReference();
        Study.createCodeModal(ctx);
      },
    },
  });
})(window.Study);
