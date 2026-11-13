"use strict";

const CLUSTERS = [
  { code: "A", name: "প্রমিত/প্রায়-প্রমিত রূপ থেকে বৈশিষ্ট্য নির্ণয়" },
  { code: "B", name: "সাধারণ সমীকরণ থেকে বৈশিষ্ট্য নির্ণয় (বর্গ পূরণ)" },
  { code: "C", name: "উপকেন্দ্র ও শীর্ষ থেকে অক্ষ ও নিয়ামক নির্ণয়" },
  { code: "D", name: "উপকেন্দ্র ও নিয়ামক থেকে সমীকরণ নির্ণয়" },
  { code: "E", name: "শীর্ষ/অন্য শর্ত থেকে সমীকরণ নির্ণয়" },
  { code: "F", name: "উপকেন্দ্রিক লম্বের প্রান্তবিন্দু সংক্রান্ত" },
  { code: "G", name: "ফোকাস দূরত্ব ও বিন্দুর স্থানাঙ্ক" },
  { code: "H", name: "স্পর্শক" },
  { code: "I", name: "তত্ত্ব ও প্রমাণ" },
  { code: "J", name: "y = ax²+bx+c আকারের সমস্যা" },
];

const DIFFS = ["সহজ", "মাঝারি", "কঠিন"];
const STATUSES = ["করা হয়নি", "চলছে", "শেষ"];
const IMPS = ["অতি গুরুত্বপূর্ণ", "গুরুত্বপূর্ণ", "কম গুরুত্ব"];
const PRIS = ["১ম", "২য়", "৩য়"];

// [প্রশ্ন, বিবরণ, ক্লাস্টার, কঠিনতা, রেফারেন্স, ভর্তি পরীক্ষা, নোট]
const PROBLEMS = [
  ["1(i)", "y² = 9x এর শীর্ষ, উপকেন্দ্র, লম্ব, নিয়ামক", "A", "সহজ", 0, "", "সরাসরি y²=4ax এ বসাও"],
  ["1(ii)", "x² = −12y এর বৈশিষ্ট্য", "A", "সহজ", 3, "বুয়েট", "সরাসরি x²=4ay এ বসাও (a ঋণাত্মক)"],
  ["1(iii)", "x²+4x+2y=0 এর বৈশিষ্ট্য", "B", "মাঝারি", 0, "", "বর্গ পূরণ করে (x+2)² = −2(y−2)"],
  ["1(iv)", "y²+8x−2y−23=0 এর বৈশিষ্ট্য", "B", "মাঝারি", 2, "", "বর্গ পূরণ: (y−1)² = −8(x−3)"],
  ["1(v)", "y² = 8x−8y এর বৈশিষ্ট্য", "B", "মাঝারি", 3, "", "y²+8y বর্গ পূরণ"],
  ["1(vi)", "y² = 4y+4x−8 এর বৈশিষ্ট্য", "B", "মাঝারি", 0, "", "(y−2)² = 4(x−1)"],
  ["1(vii)", "x²+4y−4=0 এর বৈশিষ্ট্য", "A", "সহজ", 0, "", "x² = −4(y−1) আকারে সাজাও"],
  ["1(viii)", "y² = 4y+4x−16 এর বৈশিষ্ট্য", "B", "মাঝারি", 0, "", "(y−2)² = 4(x−3)"],
  ["2(i)", "উপকেন্দ্র (−1,1), শীর্ষ (2,−3); অক্ষ ও নিয়ামক", "C", "মাঝারি", 4, "কুয়েট", "অক্ষ = দুই বিন্দুর সংযোজক; নিয়ামক অক্ষের উপর লম্ব, শীর্ষ থেকে ২ গুণ দূরে"],
  ["2(ii)", "উপকেন্দ্র (3,4), শীর্ষ (0,0); নিয়ামক", "C", "মাঝারি", 5, "বুয়েট", "শীর্ষ = উপকেন্দ্র ও নিয়ামক-পাদবিন্দুর মধ্যবিন্দু"],
  ["2(iii)", "উপকেন্দ্র (0,0), শীর্ষ (−2,−1); নিয়ামক", "C", "মাঝারি", 4, "", "2(ii) এর অনুরূপ"],
  ["2(iv)", "2(i) এর হুবহু পুনরাবৃত্তি", "C", "মাঝারি", 3, "", "2(i) করলেই হবে"],
  ["3(i)", "5x²+30x+2y+59=0 এর বৈশিষ্ট্য", "B", "মাঝারি", 9, "", "সহগ 5 দিয়ে ভাগ করে বর্গ পূরণ; সর্বাধিক বার এসেছে"],
  ["3(ii)", "x²−2y−8x+6=0; শীর্ষ, ফোকাস, লম্ব", "B", "মাঝারি", 0, "", "(x−4)² = 2(y+5)"],
  ["3(iii)", "3x²−4y+6x−5=0; উপকেন্দ্র, অক্ষ, নিয়ামক", "B", "মাঝারি", 2, "", "সহগ 3 দিয়ে ভাগ"],
  ["3(iv)", "x²−8x+2y+7=0; উপকেন্দ্র, শীর্ষ, নিয়ামক", "B", "মাঝারি", 6, "", "(x−4)² = −2(y−4)"],
  ["3(v)", "(y−1)² = 4(x−2) এর বৈশিষ্ট্য", "A", "সহজ", 1, "", "সরাসরি বসাও"],
  ["3(vi)", "5x²+15x−10y−4=0; শীর্ষ, অক্ষ, নিয়ামক", "B", "মাঝারি", 5, "বুয়েট", "সহগ 5 ও ভগ্নাংশ হিসাব"],
  ["3(vii)", "y² = 4(x−2); শীর্ষ ও উপকেন্দ্র", "A", "সহজ", 1, "", "সরাসরি বসাও"],
  ["3(viii)", "3y²−10x−12y−18=0 এর বৈশিষ্ট্য", "B", "মাঝারি", 3, "", "সহগ 3 দিয়ে ভাগ, y এর বর্গ পূরণ"],
  ["4(i)", "উপকেন্দ্র (−8,−2), নিয়ামক 2x−y=9; সমীকরণ", "D", "কঠিন", 8, "বুয়েট", "হেলানো নিয়ামক; PS² = PM² ব্যবহার"],
  ["4(ii)", "উপকেন্দ্র (1,1), নিয়ামক 3x+4y=1; সমীকরণ ও অক্ষ", "D", "মাঝারি", 5, "", "PS=PM; অক্ষ = নিয়ামকের উপর লম্ব ও উপকেন্দ্রগামী"],
  ["4(iii)", "উপকেন্দ্র (−1,1), নিয়ামক x+y+1=0; সমীকরণ, অক্ষ, লম্ব", "D", "মাঝারি", 1, "", "PS=PM; লম্ব = 2×(উপকেন্দ্র-নিয়ামক দূরত্ব)"],
  ["4(iv)", "উপকেন্দ্র মূলবিন্দুতে; x−y+1=0 শীর্ষে স্পর্শক", "E", "কঠিন", 2, "বুয়েট, কুয়েট", "শীর্ষে স্পর্শক অক্ষের উপর লম্ব, তাই নিয়ামক বের করো"],
  ["4(v)", "উপকেন্দ্র (2,5); শীর্ষে x=4 অক্ষের উপর লম্ব", "E", "মাঝারি", 2, "", "অক্ষ y=5; শীর্ষ (4,5)"],
  ["4(vi)", "শীর্ষ (2,3), নিয়ামক y=6; সমীকরণ ও লম্ব", "E", "মাঝারি", 2, "", "অক্ষ x=2; উল্লম্ব প্যারাবোলা"],
  ["4(vii)", "নিয়ামক 2x+y=0, শীর্ষ (3,−1); সমীকরণ", "E", "কঠিন", 0, "", "শীর্ষ থেকে উপকেন্দ্র বের করে PS=PM"],
  ["4(viii)", "শীর্ষ (5,3), উপকেন্দ্র (−2,3); সমীকরণ", "E", "সহজ", 1, "", "অনুভূমিক অক্ষ; a = −7"],
  ["4(ix)", "উপকেন্দ্র (2,0), নিয়ামক x+2=0", "D", "সহজ", 2, "", "y² = 8x"],
  ["4(x)", "নিয়ামক 4x+3y−5=0, শীর্ষ (3,1); সমীকরণ", "E", "কঠিন", 2, "", "শীর্ষ থেকে উপকেন্দ্র বের করে PS=PM"],
  ["5(i)", "শীর্ষ (4,−3), লম্ব ৪, অক্ষ x-অক্ষের সমান্তরাল", "E", "সহজ", 5, "বুয়েট", "(y+3)² = ±4(x−4)"],
  ["5(ii)", "শীর্ষ (4,−3), নিয়ামক x-অক্ষের সমান্তরাল, (−4,−7) বিন্দুগামী", "E", "সহজ", 2, "", "(x−4)² = 4a(y+3) এ বিন্দু বসাও"],
  ["5(iii)", "শীর্ষ (0,2), অক্ষ y-অক্ষের সমান্তরাল, (2,5) বিন্দুগামী", "E", "সহজ", 1, "SUST", "x² = 4a(y−2) এ বিন্দু বসাও"],
  ["5(iv)", "লম্বের প্রান্তবিন্দু (3,5) ও (3,−3)", "F", "মাঝারি", 0, "", "দুটি উত্তর; মধ্যবিন্দু = উপকেন্দ্র"],
  ["5(v)", "লম্বের প্রান্তবিন্দু (6,4) ও (−2,4)", "F", "মাঝারি", 1, "", "দুটি উত্তর"],
  ["6(i)", "y²=8x এ ফোকাস দূরত্ব ৬; বিন্দু", "G", "সহজ", 0, "", "x + a = 6"],
  ["6(ii)", "y²=16x এ ফোকাস দূরত্ব ৬; বিন্দু", "G", "সহজ", 8, "চুয়েট", "x + a = 6, তারপর y বের করো"],
  ["6(iii)", "y²=4px, (3,−2) বিন্দুগামী; লম্ব, উপকেন্দ্র, নিয়ামক", "G", "মাঝারি", 6, "", "বিন্দু বসিয়ে p নির্ণয়"],
  ["7(i)", "y=3x+1 স্পর্শক হলে লম্ব, উপকেন্দ্র, স্পর্শবিন্দু, নিয়ামক", "H", "মাঝারি", 2, "চুয়েট, কুয়েট", "স্পর্শ শর্ত c = a/m"],
  ["7(ii)", "y²=4x এর (1,−2) বিন্দুতে স্পর্শক", "H", "সহজ", 0, "", "yy₁ = 2a(x+x₁)"],
  ["7(iii)", "প্রমাণ: lx+my+n=0 স্পর্শক হবে যদি ln = am²", "I", "কঠিন", 4, "বুয়েট", "y=mx+c স্পর্শ শর্ত বা বিযুক্তকারী"],
  ["7(iv)", "y²=12x এর স্পর্শক যা x+2y−1=0 এর উপর লম্ব", "H", "মাঝারি", 0, "", "লম্ব শর্তে ঢাল বের করো, তারপর c = a/m"],
  ["8(i)", "y²=12x; লম্বের ঋণাত্মক প্রান্ত ও নিয়ামক-অক্ষের ছেদের সংযোজক", "F", "মাঝারি", 1, "চুয়েট", "(3,−6) ও (−3,0) বিন্দু"],
  ["8(ii)", "y²=4ax; লম্বের প্রান্তদ্বয় ও শীর্ষের সংযোগ রেখা", "F", "মাঝারি", 0, "", "(a,±2a) ও (0,0)"],
  ["9(i)", "y=ax²+bx+c এর শীর্ষ (−2,3), (0,5) বিন্দুগামী; a,b,c", "J", "মাঝারি", 9, "", "শীর্ষ রূপ y = a(x+2)²+3"],
  ["9(ii)", "প্যারাবোলার প্রমিত সমীকরণ (প্রতিপাদন)", "I", "কঠিন", 1, "", "তত্ত্ব; উপকেন্দ্র-নিয়ামক সংজ্ঞা থেকে"],
  ["10(i)", "y²=8x+5; শীর্ষ ও লম্ব", "A", "সহজ", 1, "", "y² = 8(x+5/8)"],
  ["10(ii)", "y²=2(x+3); শীর্ষ, উপকেন্দ্র, নিয়ামক", "A", "সহজ", 1, "", ""],
  ["10(iii)", "x²=4(1−y); শীর্ষ, উপকেন্দ্র, নিয়ামক", "A", "সহজ", 3, "", "x² = −4(y−1) আকারে"],
  ["11", "উপকেন্দ্র (−6,−6), শীর্ষ (−2,2); সমীকরণ", "E", "কঠিন", 1, "", "হেলানো অক্ষ; নিয়ামক বের করে PS=PM"],
  ["12", "y²=9x এ কোটি ১২; ফোকাস দূরত্ব", "G", "সহজ", 4, "বুয়েট", "x বের করে x + a"],
].map(([id, desc, cluster, diff, refs, adm, note], order) => {
  const score = refs + (adm ? 2 : 0);
  return {
    id, desc, cluster, diff, refs, adm, note, order, score,
    imp: refs >= 5 ? IMPS[0] : refs >= 2 ? IMPS[1] : IMPS[2],
    pri: score >= 5 ? PRIS[0] : score >= 2 ? PRIS[1] : PRIS[2],
  };
});

/* ---------- state ---------- */
const STORE_KEY = "conics-tracker-status-v1";
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
      <td class="note c-note" data-label="কৌশল">${esc(p.note)}</td>
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
