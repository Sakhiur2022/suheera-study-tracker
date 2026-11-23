"use strict";
/* পাতার নিজস্ব উপস্থাপনা: সারি, ম্যাট্রিক্সের বাড়তি কলাম, ক্রস টেবিল, রেফারেন্স অংশ। */
(function (Study) {
  const { $, bn, esc } = Study.dom;
  const { IMPS, IMP_CLASS, TYPE_SHORT } = Study.pageModel;

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
        <td class="c-id">${esc(p.no)}</td>
        <td class="c-title">${esc(p.title)}<span class="board">${esc(p.board)}</span></td>
        <td data-label="ধারণা"><span class="cluster-tag" title="${esc(ctx.clusterName(p.cluster))}">${p.cluster}</span><span class="cn">${esc(ctx.clusterName(p.cluster))}</span></td>
        <td class="c-type" data-label="ধরন">${esc(TYPE_SHORT[p.type])}</td>
        <td data-label="কঠিনতা"><span class="chip d-${p.diff}">${p.diff}</span></td>
        <td data-label="গুরুত্ব"><span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span></td>
        <td class="c-status" data-label="অবস্থা"></td>
        <td class="c-more"><button type="button" class="more" data-id="${esc(p.id)}" aria-haspopup="dialog">উত্তর দেখো</button></td>
      </tr>`;
      return tb;
    },
  };

  const matrixExtra = {
    cells: (c) => `<td class="num m-imp" data-label="গুরুত্ব"><span class="chip ${IMP_CLASS[c.imp]}">${c.imp}</span></td>`,
    footer: `<td class="m-imp"></td>`,
  };

  function renderCross(ctx) {
    const { diffs, problems } = ctx;
    $("cross").querySelector("thead").innerHTML = `<tr><th>কঠিনতা</th>${IMPS.map((i) => `<th>${i}</th>`).join("")}<th>মোট</th></tr>`;
    $("cross").querySelector("tbody").innerHTML = diffs.map((d) => {
      const row = IMPS.map((i) => problems.filter((p) => p.diff === d && p.imp === i).length);
      return `<tr><th scope="row">${d}</th>${row.map((n, k) => `<td class="num" data-label="${IMPS[k]}">${n ? bn(n) : "–"}</td>`).join("")}<td class="num" data-label="মোট">${bn(row.reduce((a, b) => a + b, 0))}</td></tr>`;
    }).join("");
  }

  const list = (items) => `<ul class="tight">${items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  function compareTable(c) {
    return `<table class="mini-table"><thead><tr>${c.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${
      c.rows.map((r) => `<tr>${r.map((v, i) => i ? `<td>${esc(v)}</td>` : `<th scope="row">${esc(v)}</th>`).join("")}</tr>`).join("")
    }</tbody></table>${c.c ? `<p class="concl">${esc(c.c)}</p>` : ""}`;
  }

  function renderReference() {
    const D = Study.pageData;
    const O = D.OVERVIEW;
    $("ov-topics").innerHTML = O.topics.map((t) =>
      `<tr><th scope="row" data-label="টপিক">${esc(t.t)}</th><td class="num" data-label="মোট">${bn(t.n)}</td><td class="num" data-label="পড়ার ক্রম">${typeof t.o === "number" ? bn(t.o) : esc(t.o)}</td><td class="num" data-label="জ্ঞান">${bn(t.g)}</td><td class="num" data-label="অনুধাবন">${bn(t.u)}</td><td class="num" data-label="প্রয়োগ">${bn(t.a)}</td><td class="num" data-label="উচ্চতর">${bn(t.h)}</td><td data-label="গুরুত্ব">${esc(t.i)}</td><td data-label="কী পড়বে">${esc(t.r)}</td></tr>`).join("");
    $("ov-types").innerHTML = O.types.map((t) =>
      `<tr><th scope="row" data-label="ধরন">${esc(t.t)}</th><td class="num" data-label="মোট">${bn(t.n)}</td><td data-label="কঠিনতা">${esc(t.d)}</td><td data-label="কত বড় লিখবে">${esc(t.w)}</td></tr>`).join("");
    $("ov-first").innerHTML = list(O.first);
    $("ov-tips").innerHTML = list(O.tips);
    $("ov-verify").innerHTML = list(O.verify);
    $("defs").innerHTML = D.DEFS.map((d, i) =>
      `<tr><td class="num" data-label="ক্রম">${bn(i + 1)}</td><th scope="row" data-label="বিষয়">${esc(d.t)}</th><td data-label="মুখস্থ উত্তর">${esc(d.a)}</td><td data-label="টিপ">${esc(d.k)}</td></tr>`).join("");
    $("und").innerHTML = D.UNDERSTAND.map((d, i) =>
      `<tr><td class="num" data-label="ক্রম">${bn(i + 1)}</td><th scope="row" data-label="প্রশ্ন">${esc(d.q)}</th><td data-label="মুখস্থ উত্তর">${esc(d.a)}</td><td data-label="কী-ওয়ার্ড">${esc(d.k)}</td></tr>`).join("");
    $("desc").innerHTML = D.DESCRIBE.map((d) =>
      `<article class="cmp-block"><h3>${esc(d.t)}</h3>${descBody(d)}</article>`).join("");
    $("cmp").innerHTML = D.COMPARE.map((c) =>
      `<article class="cmp-block"><h3>${esc(c.t)}</h3><div class="scroll">${compareTable(c)}</div></article>`).join("") +
      `<article class="cmp-block"><h3>${esc(D.STEPS.t)}</h3>${list(D.STEPS.l.map((s) => s.replace(/^•\s*/, "")))}</article>`;
    $("facts").innerHTML = D.FACTS.map((d, i) =>
      `<tr><td class="num" data-label="ক্রম">${bn(i + 1)}</td><th scope="row" data-label="বিষয়">${esc(d.t)}</th><td data-label="তথ্য">${esc(d.a)}</td></tr>`).join("");
  }

  function descBody(d) {
    const row = (k, v) => v && v !== "—" ? `<li><strong>${k}:</strong> ${esc(v)}</li>` : "";
    return `<ul class="tight">${row("গঠন / বর্ণনা", d.s)}${row("সুবিধা / বৈশিষ্ট্য", d.p)}${row("অসুবিধা / সীমাবদ্ধতা", d.c)}${row("চিত্র / উদাহরণ টিপ", d.d)}</ul>`;
  }

  Study.pageViews = { rowView, matrixExtra, renderCross, renderReference, descBody, compareTable };
})((window.Study = window.Study || {}));
