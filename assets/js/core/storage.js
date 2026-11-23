"use strict";
/*
 * Adapter over localStorage. Private-mode / blocked storage must never break
 * the page, so every access is guarded here — once — instead of at each call site.
 */
(function (Study) {
  Study.storage = {
    readJSON(key, fallback) {
      try {
        const value = JSON.parse(localStorage.getItem(key));
        return value == null ? fallback : value;
      } catch (e) {
        return fallback;
      }
    },
    writeJSON(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false; // সংরক্ষণ বন্ধ
      }
    },
  };
})((window.Study = window.Study || {}));
