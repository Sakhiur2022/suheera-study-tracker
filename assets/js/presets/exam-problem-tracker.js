"use strict";
/*
 * Factory: createExamProblemTracker({ storageKey, clusters, rows })
 *
 * For exercise-set pages (parabola, ellipse, and any future conic/chapter) whose data is a
 * list of tuples:
 *   [question, description, cluster, difficulty, refs, admission, note]
 * Everything else — derived importance/priority, filters, sorting, row markup — lives here,
 * so a new page is its data file plus one call.
 */
(function (Study) {
  const { esc, bn } = Study.dom;

  const IMPS = ["অতি গুরুত্বপূর্ণ", "গুরুত্বপূর্ণ", "কম গুরুত্ব"];
  const PRIS = ["১ম", "২য়", "৩য়"];

  const impClass = (imp) => (imp === IMPS[0] ? "i-অতি" : imp === IMPS[1] ? "i-গুরুত্বপূর্ণ" : "i-কম");
  const priClass = (pri) => "p-" + (PRIS.indexOf(pri) + 1);

  // Derived fields: score weighs how often a question appeared; admission-test questions count extra.
  function toProblem([id, desc, cluster, diff, refs, adm, note], order) {
    const score = refs + (adm ? 2 : 0);
    return {
      id, desc, cluster, diff, refs, adm, note, order, score,
      imp: refs >= 5 ? IMPS[0] : refs >= 2 ? IMPS[1] : IMPS[2],
      pri: score >= 5 ? PRIS[0] : score >= 2 ? PRIS[1] : PRIS[2],
    };
  }

  // Row Strategy: one <tr> per problem inside the table's single <tbody>.
  const rowView = {
    rowBase: "",
    begin(table) {
      const body = table.querySelector("tbody");
      body.innerHTML = "";
      return { add: (row) => body.appendChild(row) };
    },
    createRow(p, ctx) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td class="c-id" data-label="প্রশ্ন">${esc(p.id)}</td>
      <td class="desc c-desc">${esc(p.desc)}${p.adm ? `<span class="adm">ভর্তি পরীক্ষা: ${esc(p.adm)}</span>` : ""}</td>
      <td data-label="ক্লাস্টার"><span class="cluster-tag" title="${esc(ctx.clusterName(p.cluster))}">${p.cluster}</span></td>
      <td data-label="কঠিনতা"><span class="chip d-${p.diff}">${p.diff}</span></td>
      <td class="num" data-label="রেফারেন্স">${bn(p.refs)}</td>
      <td data-label="গুরুত্ব"><span class="chip ${impClass(p.imp)}">${p.imp}</span></td>
      <td data-label="অগ্রাধিকার"><span class="chip ${priClass(p.pri)}">${p.pri}</span></td>
      <td class="note c-note${p.note.startsWith("⚠") ? " warn" : ""}" data-label="কৌশল">${esc(p.note)}</td>
      <td class="c-status" data-label="অবস্থা"></td>`;
      return tr;
    },
  };

  Study.createExamProblemTracker = function createExamProblemTracker({ storageKey, clusters, rows }) {
    const F = Study.filters;
    return Study.createTracker({
      storageKey,
      clusters,
      problems: rows.map(toProblem),
      filters: [
        F.field("cluster", clusters.map((c) => ({ value: c.code, label: `${c.code} · ${c.name}` }))),
        F.field("diff", Study.DIFFS),
        F.field("imp", IMPS),
        F.field("pri", PRIS),
        F.status(),
      ],
      searchText: (p) => p.id + " " + p.desc + " " + p.note,
      sorts: { score: Study.sorts.descBy((p) => p.score) },
      view: rowView,
    });
  };
})((window.Study = window.Study || {}));
