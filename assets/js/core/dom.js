"use strict";
/* Tiny DOM/formatting helpers (no state). */
(function (Study) {
  const $ = (id) => document.getElementById(id);
  const bn = (n) => Number(n).toLocaleString("bn-BD");
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // options: array of strings or { value, label }
  function fillSelect(el, options) {
    el.innerHTML = "";
    for (const o of options) {
      const opt = document.createElement("option");
      opt.value = typeof o === "string" ? o : o.value;
      opt.textContent = typeof o === "string" ? o : o.label;
      el.appendChild(opt);
    }
  }

  Study.dom = { $, bn, esc, fillSelect };
})((window.Study = window.Study || {}));
