"use strict";
/* ICT অধ্যায় ২ লিখিত প্রশ্ন — shared tracker-কে এই পাতার অংশগুলো দিয়ে জোড়া লাগায়। */
(function (Study) {
  const { CLUSTERS, PROBLEMS } = Study.pageData;
  const { IMPS, IMP_RANK, DIFFS, TYPES } = Study.pageModel;
  const { rowView, matrixExtra, renderCross, renderReference } = Study.pageViews;
  const F = Study.filters;
  const topics = [...new Set(CLUSTERS.map((c) => c.topic))];

  Study.createTracker({
    storageKey: "ict-ch2-written-questions-status-v1", // keep: it holds saved progress
    clusters: CLUSTERS,
    problems: PROBLEMS,
    diffs: DIFFS,
    filters: [
      F.field("cluster", CLUSTERS.map((c) => ({ value: c.code, label: `${c.code} · ${c.name}` }))),
      F.field("diff", DIFFS),
      F.field("imp", IMPS),
      F.field("type", TYPES),
      F.field("topic", topics),
      F.status(),
    ],
    searchText: (p) => p.no + " " + p.title + " " + p.board + " " + p.topic,
    sorts: {
      imp: Study.sorts.descBy((p) => IMP_RANK[p.imp]),
      count: Study.sorts.descBy((p) => p.count),
    },
    view: rowView,
    matrixExtra,
    hooks: {
      init(ctx) {
        renderCross(ctx);
        renderReference();
        Study.createAnswerModal(ctx);
      },
    },
  });
})(window.Study);
