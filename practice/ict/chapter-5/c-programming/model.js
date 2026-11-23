"use strict";
/* Vocabulary specific to the C-programming tracker (difficulty/importance scales, parts). */
(function (Study) {
  const IMPS = ["অতি উচ্চ", "উচ্চ", "মাঝারি-উচ্চ", "মাঝারি", "নিম্ন-মাঝারি"]; // বেশি থেকে কম
  const IMP_RANK = { "অতি উচ্চ": 5, "উচ্চ": 4, "মাঝারি-উচ্চ": 3, "মাঝারি": 2, "নিম্ন-মাঝারি": 1 };
  const IMP_CLASS = { "অতি উচ্চ": "i5", "উচ্চ": "i4", "মাঝারি-উচ্চ": "i3", "মাঝারি": "i2", "নিম্ন-মাঝারি": "i1" };
  const PARTS = [1, 2, 3, 4, 5];

  Study.pageModel = { IMPS, IMP_RANK, IMP_CLASS, PARTS };
})((window.Study = window.Study || {}));
