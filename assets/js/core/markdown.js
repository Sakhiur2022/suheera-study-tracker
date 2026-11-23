"use strict";
/* বইয়ের লেখার ছোট মার্কডাউন (বোল্ড, কোড, তালিকা, উদ্ধৃতি) */
(function (Study) {
  const { esc } = Study.dom;

  Study.md = function md(text) {
    return String(text).split("\n").map((raw) => {
      let line = esc(raw);
      let cls = "";
      if (/^&gt;\s?/.test(line)) { line = line.replace(/^&gt;\s?/, ""); cls = "quote"; }
      else if (/^\*\s{2,}/.test(raw)) { line = "• " + line.replace(/^\*\s+/, ""); }
      line = line
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*([^*\s][^*]*?)\*/g, "<em>$1</em>");
      return cls ? `<span class="${cls}">${line}</span>` : line;
    }).join("<br>");
  };
})((window.Study = window.Study || {}));
