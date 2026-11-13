"use strict";
// আজকের তারিখের সারি চিহ্নিত করে (স্থানীয় সময় অনুযায়ী)
(function () {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const today = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const row = document.querySelector(`.routine tr[data-date="${today}"]`);
  if (!row) return;
  row.classList.add("today");
  const tag = row.querySelector(".today-tag");
  if (tag) tag.hidden = false;
})();
