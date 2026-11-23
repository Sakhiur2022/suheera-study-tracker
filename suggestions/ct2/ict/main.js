"use strict";
(function () {
  const sols = Array.from(document.querySelectorAll("details.sol"));
  const toggle = document.getElementById("toggle-all");
  const count = document.getElementById("open-count");

  function refresh() {
    const open = sols.filter((d) => d.open).length;
    const bn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
    count.textContent = `${bn(sols.length)}টির মধ্যে ${bn(open)}টি সমাধান খোলা`;
    toggle.textContent =
      open === sols.length ? "সব সমাধান বন্ধ করো" : "সব সমাধান খুলো";
  }

  sols.forEach((d) => d.addEventListener("toggle", refresh));
  toggle.addEventListener("click", () => {
    const openAll = sols.some((d) => !d.open);
    sols.forEach((d) => (d.open = openAll));
  });

  // সূচি বা লিংক থেকে এলে ওই প্রশ্নের সমাধান খুলে দেয়
  function openFromHash() {
    const el = document.getElementById(location.hash.slice(1));
    const d = el && el.querySelector && el.querySelector("details.sol");
    if (d) d.open = true;
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();

  // কোড কপি (shared clipboard Adapter: assets/js/core/clipboard.js)
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button.copy");
    if (!b) return;
    const text = document.getElementById(b.dataset.target).textContent;
    Study.copyWithFeedback(b, text, { idleLabel: "কপি", doneLabel: "কপি হয়েছে" });
  });

  // প্রিন্টের আগে সব সমাধান খোলা
  window.addEventListener("beforeprint", () =>
    sols.forEach((d) => (d.open = true)),
  );

  refresh();
})();
