"use strict";
/* The "কোড দেখো" dialog. Opens from a delegated click on the problems table. */
(function (Study) {
  const { $, bn, esc } = Study.dom;
  const { md } = Study;
  const { IMP_CLASS } = Study.pageModel;

  Study.createCodeModal = function createCodeModal(ctx) {
    const modal = $("code-modal");
    let current = null;
    const COPY = { idleLabel: "কোড কপি করো", doneLabel: "কপি হয়েছে", failLabel: "কপি করা যায়নি" };

    function open(p) {
      current = p;
      $("m-title").textContent = `${p.id} · ${p.title}`;
      $("m-meta").innerHTML =
        `<span class="cluster-tag" title="${esc(ctx.clusterName(p.cluster))}">${p.cluster}</span> ` +
        `<span class="chip d-${p.diff}">${p.diff}</span> ` +
        `<span class="chip ${IMP_CLASS[p.imp]}">${p.imp}</span> ` +
        `<span class="m-pat">${esc(p.pattern)}</span>`;
      $("m-stmt").innerHTML = md(p.stmt);
      $("m-code").textContent = p.code;
      $("m-note").innerHTML = p.note ? `<h3>আউটপুট / নোট</h3><p>${md(p.note)}</p>` : "";
      $("m-note").hidden = !p.note;
      $("m-issue").innerHTML = p.issue ? `<h3>⚠ কোডের ত্রুটি</h3><p>${esc(p.issue)}</p>` : "";
      $("m-issue").hidden = !p.issue;
      $("m-copy").textContent = COPY.idleLabel;
      modal.querySelector(".m-body").scrollTop = 0;
      if (typeof modal.showModal === "function") modal.showModal(); else modal.setAttribute("open", "");
    }

    $("problems").addEventListener("click", (e) => {
      const btn = e.target.closest("button.more");
      if (!btn) return;
      open(ctx.problems.find((x) => x.id === btn.dataset.id));
    });
    $("m-close").addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); }); // backdrop click
    $("m-copy").addEventListener("click", () => Study.copyWithFeedback($("m-copy"), current.code, COPY));

    return { open };
  };
})((window.Study = window.Study || {}));
