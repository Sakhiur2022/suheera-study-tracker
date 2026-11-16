"use strict";
(function () {
  const sols = Array.from(document.querySelectorAll("details.sol"));
  const toggle = document.getElementById("toggle-all");
  const count = document.getElementById("open-count");

  function refresh() {
    const open = sols.filter((d) => d.open).length;
    const bn = (n) => String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
    count.textContent = `${bn(sols.length)}টির মধ্যে ${bn(open)}টি সমাধান খোলা`;
    toggle.textContent = open === sols.length ? "সব সমাধান বন্ধ করো" : "সব সমাধান খুলো";
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

<<<<<<< HEAD
  // সূচির পুরো সারি ক্লিক করা যায়
  document.querySelectorAll("table.toc tbody tr").forEach((tr) => {
    tr.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // লিংকে সরাসরি ক্লিক করলে ব্রাউজারই সামলাবে
      const a = tr.querySelector("a");
      if (a) location.hash = a.getAttribute("href");
    });
  });

=======
>>>>>>> 5ba30b3edddadddba3aa425fa16c7953f28973f3
  // কোড কপি
  document.addEventListener("click", (e) => {
    const b = e.target.closest("button.copy");
    if (!b) return;
    const text = document.getElementById(b.dataset.target).textContent;
    const done = () => { b.textContent = "কপি হয়েছে"; setTimeout(() => (b.textContent = "কপি"), 1500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, () => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (_) {}
      ta.remove();
    }
  });

  // প্রিন্টের আগে সব সমাধান খোলা
  window.addEventListener("beforeprint", () => sols.forEach((d) => (d.open = true)));

  refresh();
})();
