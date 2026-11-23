"use strict";
/* "উত্তর দেখো" ডায়ালগ: প্রশ্নের ধরন অনুযায়ী লেখার নিয়ম, মুখস্থ উত্তর ও সংশ্লিষ্ট ছক। */
(function (Study) {
  const { $, esc } = Study.dom;
  const { IMP_CLASS } = Study.pageModel;

  Study.createAnswerModal = function createAnswerModal(ctx) {
    const modal = $("code-modal");
    const D = Study.pageData;
    const typeRule = (t) => (D.OVERVIEW.types.find((x) => x.t === t) || {}).w || "";

    function open(p) {
      const c = ctx.clusters.find((x) => x.code === p.cluster);
      $("m-title").textContent = p.no;
      $("m-meta").innerHTML =
        `<span class="cluster-tag" title="${esc(c.name)}">${p.cluster}</span> ` +
        `<span class="chip d-${p.diff}">${p.diff}</span> ` +
        `<span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span> ` +
        `<span class="m-pat">${esc(p.board)} · ${esc(p.type)}</span>`;
      $("m-stmt").textContent = p.title;

      let ans = "";
      if (p.def !== undefined) { const d = D.DEFS[p.def]; ans += `<p>${esc(d.a)}</p>${d.k ? `<p class="board">টিপ: ${esc(d.k)}</p>` : ""}`; }
      if (p.und !== undefined) { const d = D.UNDERSTAND[p.und]; ans += `<p>${esc(d.a)}</p>${d.k ? `<p class="board">কী-ওয়ার্ড: ${esc(d.k)}</p>` : ""}`; }
      let extra = "";
      (c.desc || []).forEach((i) => { extra += `<div class="cmp-block"><h3>${esc(D.DESCRIBE[i].t)}</h3>${Study.pageViews.descBody(D.DESCRIBE[i])}</div>`; });
      (c.cmp || []).forEach((i) => { extra += `<div class="cmp-block"><h3>${esc(D.COMPARE[i].t)}</h3><div class="scroll">${Study.pageViews.compareTable(D.COMPARE[i])}</div></div>`; });

      $("m-ans").innerHTML = ans ? `<h3>মুখস্থ উত্তর</h3>${ans}` : "";
      $("m-ans").hidden = !ans;
      $("m-rule").innerHTML = `<h3>কত বড় লিখবে</h3><p>${esc(typeRule(p.type))}</p>`;
      $("m-rule").hidden = !typeRule(p.type);
      $("m-concept").innerHTML = `<h3>ধারণা: ${esc(c.name)}</h3><p>${esc(c.tip || "এই ধারণার আলাদা পড়ার টিপ নেই।")}</p>${p.count ? `<p class="board">এই ধারণা থেকে মোট ${Study.dom.bn(c.count)}টি প্রশ্ন এসেছে।</p>` : ""}`;
      $("m-extra").innerHTML = extra ? `<h3>সংশ্লিষ্ট বর্ণনা ও ছক</h3>${extra}` : "";
      $("m-extra").hidden = !extra;
      modal.querySelector(".m-body").scrollTop = 0;
      if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    }

    $("problems").addEventListener("click", (e) => {
      const btn = e.target.closest("button.more");
      if (btn) open(ctx.problems.find((x) => x.id === btn.dataset.id));
    });
    $("m-close").addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
    return { open };
  };
})((window.Study = window.Study || {}));
