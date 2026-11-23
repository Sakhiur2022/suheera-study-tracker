"use strict";
/* Shared vocabulary used by every tracker page. */
(function (Study) {
  Study.ALL = "সব";
  Study.DIFFS = ["সহজ", "মাঝারি", "কঠিন"];
  Study.STATUSES = ["করা হয়নি", "চলছে", "শেষ"]; // [todo, doing, done]
  Study.STATUS_CLASS = { "চলছে": "doing", "শেষ": "done" };
})((window.Study = window.Study || {}));
