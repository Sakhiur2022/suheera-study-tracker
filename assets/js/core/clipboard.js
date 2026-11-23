"use strict";
/*
 * Adapter: one copy API over navigator.clipboard and the legacy
 * execCommand("copy") fallback. Returns a Promise.
 */
(function (Study) {
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy") ? resolve() : reject(new Error("copy rejected"));
      } catch (err) {
        reject(err);
      } finally {
        ta.remove();
      }
    });
  }

  /*
   * Copy and flash a label on the button.
   * opts: { idleLabel, doneLabel, failLabel? }  — failLabel omitted = leave the button alone on failure.
   */
  function copyWithFeedback(btn, text, opts) {
    const done = () => {
      btn.textContent = opts.doneLabel;
      setTimeout(() => { btn.textContent = opts.idleLabel; }, 1500);
    };
    const fail = () => { if (opts.failLabel) btn.textContent = opts.failLabel; };
    return copyText(text).then(done, fail);
  }

  Study.copyText = copyText;
  Study.copyWithFeedback = copyWithFeedback;
})((window.Study = window.Study || {}));
