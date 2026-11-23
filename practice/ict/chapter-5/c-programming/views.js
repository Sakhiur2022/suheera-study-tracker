"use strict";
/* Page-specific presentation: row Strategy, extra matrix column, cross table, reference tables. */
(function (Study) {
  const { $, bn, esc } = Study.dom;
  const { md } = Study;
  const { IMPS, IMP_CLASS } = Study.pageModel;

  // Row Strategy: one <tbody class="prob"> per problem (so a row can carry a hidden detail row later).
  const rowView = {
    rowBase: "prob",
    begin(table) {
      table.querySelectorAll("tbody").forEach((t) => t.remove());
      return { add: (row) => table.appendChild(row) };
    },
    createRow(p, ctx) {
      const tb = document.createElement("tbody");
      tb.innerHTML = `
      <tr class="main">
        <td class="c-id">${esc(p.id)}</td>
        <td class="c-title">${esc(p.title)}${p.issue ? ' <span class="flag" title="কোডে ত্রুটি আছে">⚠</span>' : ""}<span class="part">অংশ ${bn(p.part)}</span></td>
        <td data-label="ক্লাস্টার"><span class="cluster-tag" title="${esc(ctx.clusterName(p.cluster))}">${p.cluster}</span></td>
        <td class="c-pat" data-label="প্যাটার্ন">${esc(p.pattern)}</td>
        <td data-label="কঠিনতা"><span class="chip d-${p.diff}">${p.diff}</span></td>
        <td data-label="গুরুত্ব"><span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span></td>
        <td class="c-status" data-label="অবস্থা"></td>
        <td class="c-more"><button type="button" class="more" data-id="${esc(p.id)}" aria-haspopup="dialog">কোড দেখো</button></td>
      </tr>`;
      return tb;
    },
  };

  // Extra "সাধারণ গুরুত্ব" column on the cluster matrix.
  const matrixExtra = {
    cells: (c) => `<td class="num m-imp" data-label="সাধারণ গুরুত্ব"><span class="chip ${IMP_CLASS[c.imp]}">${c.imp}</span></td>`,
    footer: `<td class="m-imp"></td>`,
  };

  // Difficulty × importance cross table (static, rendered once).
  function renderCross(ctx) {
    const { diffs, problems } = ctx;
    const head = document.querySelector("#cross thead");
    const body = document.querySelector("#cross tbody");
    head.innerHTML = `<tr><th>কঠিনতা</th>${IMPS.map((i) => `<th>${i}</th>`).join("")}<th>মোট</th></tr>`;
    body.innerHTML = diffs.map((d) => {
      const row = IMPS.map((i) => problems.filter((p) => p.diff === d && p.imp === i).length);
      return `<tr><th scope="row">${d}</th>${row.map((n, k) => `<td class="num" data-label="${IMPS[k]}">${n ? bn(n) : "–"}</td>`).join("")}<td class="num" data-label="মোট">${bn(row.reduce((a, b) => a + b, 0))}</td></tr>`;
    }).join("");
  }

  // Answers / book-code issues / algorithm patterns / theory (static, rendered once).
  function renderReference() {
    const { ANSWERS, ISSUES, PATTERNS, THEORY } = Study.pageData;
    $("answers").innerHTML = ANSWERS.map(([k, v]) => `<tr><th scope="row" data-label="উদ্দীপক">${esc(k)}</th><td data-label="উত্তর">${esc(v)}</td></tr>`).join("");
    $("issues").innerHTML = ISSUES.map(([id, issue, fix]) =>
      `<tr><th scope="row" data-label="কোড">${esc(id)}</th><td data-label="সমস্যা">${esc(issue)}</td><td data-label="সমাধান">${esc(fix)}</td></tr>`).join("");
    $("patterns").innerHTML = PATTERNS.map(([name, ids, idea]) =>
      `<tr><th scope="row" data-label="প্যাটার্ন">${esc(name)}</th><td data-label="সমস্যা">${esc(ids)}</td><td data-label="ধারণা">${esc(idea)}</td></tr>`).join("");
    $("theory").innerHTML = THEORY.map(([h, t]) => `<article><h3>${esc(h)}</h3><p>${md(t)}</p></article>`).join("");
  }

  Study.pageViews = { rowView, matrixExtra, renderCross, renderReference };
})((window.Study = window.Study || {}));
