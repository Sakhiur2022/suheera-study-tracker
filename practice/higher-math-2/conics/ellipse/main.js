"use strict";

const CLUSTERS = [
  { code: "A", name: "অক্ষ স্থানাঙ্ক-অক্ষ বরাবর: প্রমিত সমীকরণ নির্ণয়" },
  { code: "B", name: "বিন্দু বা ছেদ শর্ত থেকে সমীকরণ নির্ণয়" },
  { code: "C", name: "কেন্দ্র মূলবিন্দুতে নয়: সমীকরণ নির্ণয়" },
  { code: "D", name: "উপকেন্দ্র, নিয়ামক ও উৎকেন্দ্রিকতা থেকে সমীকরণ" },
  { code: "E", name: "উৎকেন্দ্রিকতা, লম্ব ও দূরত্ব সম্পর্ক" },
  { code: "F", name: "অজানা ধ্রুবক (p) নির্ণয় ও বৈশিষ্ট্য" },
  { code: "G", name: "সাধারণ সমীকরণ থেকে বৈশিষ্ট্য নির্ণয়" },
  { code: "H", name: "স্পর্শক" },
];

const DIFFS = ["সহজ", "মাঝারি", "কঠিন"];
const STATUSES = ["করা হয়নি", "চলছে", "শেষ"];
const IMPS = ["অতি গুরুত্বপূর্ণ", "গুরুত্বপূর্ণ", "কম গুরুত্ব"];
const PRIS = ["১ম", "২য়", "৩য়"];

// [প্রশ্ন, বিবরণ, ক্লাস্টার, কঠিনতা, রেফারেন্স, ভর্তি পরীক্ষা, নোট]
const PROBLEMS = [
  ["1(i)", "উপকেন্দ্র (±3,0), e = 1/3; সমীকরণ", "A", "সহজ", 1, "", "⚠ আমার হিসাবে a=9, b²=72, তাই 8x²+9y²=648; বইয়ের উত্তর (৬৪) ছাপার ভুল হতে পারে"],
  ["1(ii)", "উপকেন্দ্র (0,±8), e = 8/9; সমীকরণ", "A", "সহজ", 0, "", "c = ae থেকে a=9; b² = a²−c²; y-অক্ষ বরাবর বৃহৎ অক্ষ"],
  ["1(iii)", "ফোকাস (3,0), নিয়ামক x=5, e = 1/2; সমীকরণ", "D", "মাঝারি", 0, "", "PS² = e²·PM²"],
  ["1(iv)", "e = 2/3, উপকেন্দ্রিক লম্ব ৫; সমীকরণ", "A", "মাঝারি", 2, "চুয়েট", "2b²/a = 5 ও b² = a²(1−e²) থেকে a"],
  ["2(i)", "উপকেন্দ্র (1,−1),(5,−1), বৃহৎ অক্ষ ৮; সমীকরণ", "C", "মাঝারি", 0, "", "কেন্দ্র = উপকেন্দ্রদ্বয়ের মধ্যবিন্দু (3,−1); c=2, a=4"],
  ["2(ii)", "উপকেন্দ্র (±2,0), বৃহৎ অক্ষ ৪; সমীকরণ", "A", "সহজ", 1, "", "⚠ বইয়ে সম্ভাব্য ছাপার ভুল: বৃহৎ অক্ষ ৪ হলে a=c=2 হয়ে যায়; উত্তর মেলাতে বৃহৎ অক্ষ ৮ হতে হয়"],
  ["3(i)", "4x²+py²=80, (0,±4) বিন্দুগামী; p, উপকেন্দ্র, অক্ষ", "F", "সহজ", 1, "", "বিন্দু বসিয়ে p=5"],
  ["3(ii)", "px²+4y²=1, (±1,0) বিন্দুগামী; e ও অক্ষ", "F", "সহজ", 3, "", "p=1; a=1, b=1/2"],
  ["3(iii)", "x²/p + y²/5² = 1, (6,4) বিন্দুগামী; p, e, উপকেন্দ্র", "F", "মাঝারি", 4, "বুয়েট", "p=100; কোন অক্ষ বৃহৎ তা p ও 25 তুলনা করে"],
  ["4(i)", "(1,√6) ও (3,0) বিন্দুগামী উপবৃত্ত", "B", "মাঝারি", 1, "", "(3,0) থেকে a²=9, তারপর অন্য বিন্দু বসাও"],
  ["4(ii)", "উপকেন্দ্রিক লম্ব = বৃহৎ অক্ষের অর্ধেক; e", "E", "সহজ", 3, "বুয়েট", "2b²/a = a → b² = a²/2"],
  ["5(i)", "e = 1/3, উপকেন্দ্রিক লম্ব ৪; সমীকরণ", "A", "মাঝারি", 6, "", "⚠ আমার হিসাবে লম্ব ৪ ধরলে 16x²/81 + 2y²/9 = 1; বইয়ের উত্তর লম্ব ৮ ধরলে মেলে"],
  ["5(ii)", "বৃহৎ অক্ষ ১২, e = 1/3; সমীকরণ", "A", "সহজ", 2, "", "a=6, b² = 36(1−1/9) = 32"],
  ["5(iii)", "উপকেন্দ্রিক লম্ব ৪, e = 1/√2; সমীকরণ", "A", "মাঝারি", 1, "", "⚠ বইয়ে সম্ভাব্য ছাপার ভুল: লম্ব ৪ ধরলে x²+2y²=16; বইয়ের উত্তর (৬৪) লম্ব ৮-এ মেলে"],
  ["5(iv)", "উপকেন্দ্র (±1,0), উপকেন্দ্রিক লম্ব ৩; সমীকরণ", "A", "সহজ", 1, "", "c=1, b²=3a/2 ও a²−b²=1 থেকে a=2"],
  ["5(v)", "e = √(2/5), (−3,1) বিন্দুগামী; সমীকরণ", "B", "মাঝারি", 0, "", "b² = a²(1−e²) বসিয়ে বিন্দুর শর্ত প্রয়োগ"],
  ["6(i)", "e = 4/5, (10/3, √5) বিন্দুগামী; সমীকরণ ও উৎকেন্দ্রিক কোণ", "B", "মাঝারি", 7, "", "cosθ = x/a = 2/3 থেকে প্রায় 48°11′; প্রমাণ অংশও আছে"],
  ["6(ii)", "ফোকাস (0,±4), (3,0) বিন্দুগামী; সমীকরণ", "B", "মাঝারি", 1, "রুয়েট", "⚠ বইয়ে সম্ভাব্য ছাপার ভুল: ফোকাস y-অক্ষে হলে 25x²+9y²=225; বইয়ের উত্তর ফোকাস (±4,0)-এ মেলে"],
  ["6(iii)", "ফোকাস (±2,0), (3/2, √15/2) বিন্দুগামী; সমীকরণ", "B", "মাঝারি", 2, "বুয়েট", "বিন্দু থেকে দুই ফোকাসের দূরত্বের যোগফল = 2a"],
  ["7(i)", "16x²+9y²−32x−128=0; অক্ষের দৈর্ঘ্য ও ক্ষেত্রফল", "G", "মাঝারি", 1, "চুয়েট", "⚠ বইয়ের উত্তরে 3, 4 অর্ধ-অক্ষ; পূর্ণ অক্ষ ৬ ও ৮, ক্ষেত্রফল πab = 12π"],
  ["7(ii)", "5x²+9y²−30x=0 উপবৃত্ত প্রমাণ; উপকেন্দ্র", "G", "মাঝারি", 3, "বুয়েট", "(x−3)²/9 + y²/5 = 1"],
  ["7(iii)", "2x²+y²−8x−2y+1=0 উপবৃত্ত প্রমাণ; e ও উপকেন্দ্র", "G", "মাঝারি", 5, "", "বর্গ পূরণ; বৃহৎ অক্ষ y-অক্ষ বরাবর"],
  ["8(i)", "দুটি রেখার ছেদবিন্দু থেকে অক্ষ ধরে সমীকরণ", "B", "মাঝারি", 1, "বুয়েট", "x/9+y/4=1 এর x-ছেদ (9,0) ও x/2+y/3=1 এর y-ছেদ (0,3)"],
  ["8(ii)", "y = x−5 স্পর্শক প্রমাণ; স্পর্শবিন্দু", "H", "মাঝারি", 0, "", "c² = a²m²+b² যাচাই; স্পর্শবিন্দু (−a²m/c, b²/c)"],
  ["8(iii)", "y = 2x+c স্পর্শক হলে c", "H", "মাঝারি", 1, "বুয়েট", "c² = a²m²+b² = 16+3"],
  ["9(i)", "উপকেন্দ্র-নিয়ামক দূরত্ব ১৬, e = 3/5; অক্ষদ্বয় ও লম্ব", "E", "মাঝারি", 2, "বুয়েট", "a/e − ae = 16 থেকে a=15"],
  ["9(ii)", "উপকেন্দ্র-নিকটতম নিয়ামক দূরত্ব ১৪, e = 3/4; লম্ব", "E", "মাঝারি", 1, "", "a/e − ae = 14 থেকে a=24"],
  ["9(iii)", "উপকেন্দ্রদ্বয়ের দূরত্ব ৮, নিয়ামকদ্বয়ের দূরত্ব ১৮; সমীকরণ", "E", "মাঝারি", 4, "বুয়েট, কুয়েট", "ae=4, 2a/e=18 থেকে a²=36, e=2/3"],
  ["9(iv)", "ক্ষুদ্র অক্ষ = উপকেন্দ্রদ্বয়ের দূরত্ব, লম্ব ১০; e ও সমীকরণ", "A", "মাঝারি", 2, "বুয়েট", "b=c থেকে e = 1/√2"],
  ["9(v)", "উপকেন্দ্র (3,−1),(1,−1), উপকেন্দ্র-শীর্ষ দূরত্বের গুণফল ৪", "C", "মাঝারি", 0, "", "(a−c)(a+c) = b² = 4; কেন্দ্র (2,−1)"],
  ["10(i)", "ফোকাস (−2,3), নিয়ামক x−y+7=0, e = 1/√3; সমীকরণ ও লম্ব", "D", "কঠিন", 1, "", "হেলানো নিয়ামক; PS² = e²·PM²"],
  ["10(ii)", "উপকেন্দ্র (2,1), e = 1/√3, নিয়ামক 2x+y=3", "D", "কঠিন", 2, "", "হেলানো নিয়ামক"],
  ["10(iii)", "(1,1) বিন্দুগামী; ফোকাস (1,−1), নিয়ামক x−y−4=0", "D", "কঠিন", 1, "বুয়েট", "প্রথমে e বের করো (বিন্দু বসিয়ে), তারপর PS=e·PM"],
  ["10(iv)", "উপকেন্দ্র (−1,1), e = 1/2, নিয়ামক x−y+3=0", "D", "কঠিন", 4, "", "হেলানো নিয়ামক"],
  ["10(v)", "নিয়ামক y-অক্ষ, ফোকাস (c,0), e", "D", "মাঝারি", 4, "", "প্রতীকী সমস্যা; (x−c)²+y² = e²x²"],
  ["10(vi)", "উপকেন্দ্র (0,2), e = 1/2, নিয়ামক y+4=0; সমীকরণ ও লম্ব", "D", "মাঝারি", 2, "", "অনুভূমিক নিয়ামক, তাই সরল"],
  ["10(vii)", "উপকেন্দ্র (3,4), নিয়ামক x+y−2=0, e = 1/3", "D", "কঠিন", 6, "", "হেলানো নিয়ামক; সর্বাধিক বার এসেছে"],
  ["10(viii)", "উপকেন্দ্র (−2,3), নিয়ামক 2x+y−3=0, e = 1/√3", "D", "কঠিন", 1, "", "হেলানো নিয়ামক"],
  ["10(ix)", "উপকেন্দ্র মূলবিন্দুতে, e = 4/5, নিয়ামক x=2", "D", "মাঝারি", 1, "", "x²+y² = (16/25)(x−2)²"],
].map(([id, desc, cluster, diff, refs, adm, note], order) => {
  const score = refs + (adm ? 2 : 0);
  return {
    id, desc, cluster, diff, refs, adm, note, order, score,
    imp: refs >= 5 ? IMPS[0] : refs >= 2 ? IMPS[1] : IMPS[2],
    pri: score >= 5 ? PRIS[0] : score >= 2 ? PRIS[1] : PRIS[2],
  };
});

/* ---------- state ---------- */
const STORE_KEY = "ellipse-tracker-status-v1";
let status = {};
try { status = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { status = {}; }
const getStatus = (id) => status[id] || STATUSES[0];
function setStatus(id, value) {
  status[id] = value;
  try { localStorage.setItem(STORE_KEY, JSON.stringify(status)); } catch (e) { /* storage unavailable */ }
}

const bn = (n) => Number(n).toLocaleString("bn-BD");
const $ = (id) => document.getElementById(id);
const ALL = "সব";

const filters = { cluster: ALL, diff: ALL, imp: ALL, pri: ALL, status: ALL, q: "", sort: "order" };

/* ---------- filters setup ---------- */
function fillSelect(el, options) {
  el.innerHTML = "";
  for (const o of options) {
    const opt = document.createElement("option");
    opt.value = typeof o === "string" ? o : o.value;
    opt.textContent = typeof o === "string" ? o : o.label;
    el.appendChild(opt);
  }
}
const selects = {
  cluster: $("f-cluster"), diff: $("f-diff"), imp: $("f-imp"), pri: $("f-pri"), status: $("f-status"),
};
fillSelect(selects.cluster, [ALL, ...CLUSTERS.map((c) => ({ value: c.code, label: `${c.code} · ${c.name}` }))]);
fillSelect(selects.diff, [ALL, ...DIFFS]);
fillSelect(selects.imp, [ALL, ...IMPS]);
fillSelect(selects.pri, [ALL, ...PRIS]);
fillSelect(selects.status, [ALL, ...STATUSES]);

for (const key of Object.keys(selects)) {
  selects[key].addEventListener("change", () => { filters[key] = selects[key].value; renderAll(); });
}
$("f-q").addEventListener("input", (e) => { filters.q = e.target.value.trim().toLowerCase(); renderList(); });
$("f-sort").addEventListener("change", (e) => { filters.sort = e.target.value; renderList(); });
$("f-reset").addEventListener("click", () => {
  Object.assign(filters, { cluster: ALL, diff: ALL, imp: ALL, pri: ALL, status: ALL, q: "", sort: "order" });
  for (const key of Object.keys(selects)) selects[key].value = ALL;
  $("f-q").value = ""; $("f-sort").value = "order";
  renderAll();
});

/* ---------- render ---------- */
function renderProgress() {
  const done = PROBLEMS.filter((p) => getStatus(p.id) === "শেষ").length;
  const doing = PROBLEMS.filter((p) => getStatus(p.id) === "চলছে").length;
  const pct = Math.round((done / PROBLEMS.length) * 100);
  $("bar-fill").style.width = pct + "%";
  $("progress-text").textContent =
    `${bn(done)}/${bn(PROBLEMS.length)} শেষ (${bn(pct)}%) · চলছে ${bn(doing)} · বাকি ${bn(PROBLEMS.length - done - doing)}`;
}

function renderMatrix() {
  const body = document.querySelector("#matrix tbody");
  const foot = document.querySelector("#matrix tfoot");
  body.innerHTML = "";
  const totals = { সহজ: 0, মাঝারি: 0, কঠিন: 0, all: 0 };
  for (const c of CLUSTERS) {
    const items = PROBLEMS.filter((p) => p.cluster === c.code);
    const tr = document.createElement("tr");
    if (filters.cluster === c.code) tr.className = "active";
    tr.tabIndex = 0;
    tr.setAttribute("role", "button");
    tr.setAttribute("aria-label", `${c.code} ক্লাস্টার ফিল্টার করুন`);
    const cells = [`<span class="cluster-tag">${c.code}</span>`, c.name];
    const labels = ["", "", ...DIFFS, "মোট"];
    for (const d of DIFFS) {
      const n = items.filter((p) => p.diff === d).length;
      totals[d] += n;
      cells.push(n ? bn(n) : "–");
    }
    totals.all += items.length;
    cells.push(bn(items.length));
    tr.innerHTML = cells.map((v, i) => `<td${i >= 2 ? ` class="num" data-label="${labels[i]}"` : i === 0 ? ' class="m-code"' : ' class="m-name"'}>${i === 1 ? `<span class="m-tag">${c.code}</span> ` : ""}${v}</td>`).join("");
    const toggle = () => {
      filters.cluster = filters.cluster === c.code ? ALL : c.code;
      selects.cluster.value = filters.cluster;
      renderAll();
      if (filters.cluster !== ALL) $("list-h").scrollIntoView();
    };
    tr.addEventListener("click", toggle);
    tr.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
    body.appendChild(tr);
  }
  foot.innerHTML = `<tr><td class="m-code"></td><td class="m-name">মোট</td><td class="num" data-label="সহজ">${bn(totals.সহজ)}</td><td class="num" data-label="মাঝারি">${bn(totals.মাঝারি)}</td><td class="num" data-label="কঠিন">${bn(totals.কঠিন)}</td><td class="num" data-label="মোট">${bn(totals.all)}</td></tr>`;
}

function visibleProblems() {
  const list = PROBLEMS.filter((p) =>
    (filters.cluster === ALL || p.cluster === filters.cluster) &&
    (filters.diff === ALL || p.diff === filters.diff) &&
    (filters.imp === ALL || p.imp === filters.imp) &&
    (filters.pri === ALL || p.pri === filters.pri) &&
    (filters.status === ALL || getStatus(p.id) === filters.status) &&
    (!filters.q || (p.id + " " + p.desc + " " + p.note).toLowerCase().includes(filters.q))
  );
  if (filters.sort === "score") list.sort((a, b) => b.score - a.score || a.order - b.order);
  return list;
}

const impClass = (imp) => (imp === IMPS[0] ? "i-অতি" : imp === IMPS[1] ? "i-গুরুত্বপূর্ণ" : "i-কম");
const priClass = (pri) => "p-" + (PRIS.indexOf(pri) + 1);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderList() {
  const body = document.querySelector("#problems tbody");
  const list = visibleProblems();
  body.innerHTML = "";
  for (const p of list) {
    const st = getStatus(p.id);
    const tr = document.createElement("tr");
    tr.className = st === "শেষ" ? "done" : st === "চলছে" ? "doing" : "";
    tr.innerHTML = `
      <td class="c-id" data-label="প্রশ্ন">${esc(p.id)}</td>
      <td class="desc c-desc">${esc(p.desc)}${p.adm ? `<span class="adm">ভর্তি পরীক্ষা: ${esc(p.adm)}</span>` : ""}</td>
      <td data-label="ক্লাস্টার"><span class="cluster-tag" title="${esc(CLUSTERS.find((c) => c.code === p.cluster).name)}">${p.cluster}</span></td>
      <td data-label="কঠিনতা"><span class="chip d-${p.diff}">${p.diff}</span></td>
      <td class="num" data-label="রেফারেন্স">${bn(p.refs)}</td>
      <td data-label="গুরুত্ব"><span class="chip ${impClass(p.imp)}">${p.imp}</span></td>
      <td data-label="অগ্রাধিকার"><span class="chip ${priClass(p.pri)}">${p.pri}</span></td>
      <td class="note c-note${p.note.startsWith("⚠") ? " warn" : ""}" data-label="কৌশল">${esc(p.note)}</td>
      <td class="c-status" data-label="অবস্থা"></td>`;
    const sel = document.createElement("select");
    sel.setAttribute("aria-label", `${p.id} এর অবস্থা`);
    fillSelect(sel, STATUSES);
    sel.value = st;
    sel.addEventListener("change", () => {
      setStatus(p.id, sel.value);
      renderProgress();
      renderList();
    });
    tr.lastElementChild.appendChild(sel);
    body.appendChild(tr);
  }
  $("count").textContent = `${bn(list.length)}টি সমস্যা দেখানো হচ্ছে (মোট ${bn(PROBLEMS.length)})`;
  $("empty").hidden = list.length > 0;
}

function renderAll() { renderProgress(); renderMatrix(); renderList(); }
renderAll();
