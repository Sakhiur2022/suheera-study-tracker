"use strict";
/*
 * Template-method step: the cluster × difficulty summary table.
 * Clicking (or pressing Enter/Space on) a row toggles the cluster filter.
 * Pages may append columns via ctx.matrixExtra = { cells(cluster) -> html, footer -> html }.
 */
(function (Study) {
  Study.tracker = Study.tracker || {};

  Study.tracker.renderMatrix = function renderMatrix(ctx) {
    const { $, bn, esc } = Study.dom;
    const { ALL } = Study;
    const { clusters, problems, diffs, matrixExtra, state } = ctx;
    const body = document.querySelector("#matrix tbody");
    const foot = document.querySelector("#matrix tfoot");
    const activeCluster = state.get().cluster;

    body.innerHTML = "";
    const totals = Object.fromEntries(diffs.map((d) => [d, 0]));
    let all = 0;

    for (const c of clusters) {
      const items = problems.filter((p) => p.cluster === c.code);
      const tr = document.createElement("tr");
      if (activeCluster === c.code) tr.className = "active";
      tr.tabIndex = 0;
      tr.setAttribute("role", "button");
      tr.setAttribute("aria-label", `${c.code} ক্লাস্টার ফিল্টার করুন`);

      const nums = diffs.map((d) => {
        const n = items.filter((p) => p.diff === d).length;
        totals[d] += n;
        return n;
      });
      all += items.length;

      tr.innerHTML =
        `<td class="m-code"><span class="cluster-tag">${c.code}</span></td>` +
        `<td class="m-name"><span class="m-tag">${c.code}</span> ${esc(c.name)}</td>` +
        nums.map((n, i) => `<td class="num" data-label="${diffs[i]}">${n ? bn(n) : "–"}</td>`).join("") +
        `<td class="num" data-label="মোট">${bn(items.length)}</td>` +
        (matrixExtra ? matrixExtra.cells(c) : "");

      const toggle = () => {
        const next = state.get().cluster === c.code ? ALL : c.code;
        state.set({ cluster: next }); // the Observer re-renders the matrix + list
        if (next !== ALL) $("list-h").scrollIntoView();
      };
      tr.addEventListener("click", toggle);
      tr.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      });
      body.appendChild(tr);
    }

    foot.innerHTML =
      `<tr><td class="m-code"></td><td class="m-name">মোট</td>` +
      diffs.map((d) => `<td class="num" data-label="${d}">${bn(totals[d])}</td>`).join("") +
      `<td class="num" data-label="মোট">${bn(all)}</td>` +
      (matrixExtra ? matrixExtra.footer : "") +
      `</tr>`;
  };
})((window.Study = window.Study || {}));
