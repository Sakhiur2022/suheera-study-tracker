"use strict";
/*
 * Strategy pattern — interchangeable filter and sort behaviours.
 *
 * A filter strategy:  { key, selectId, options, test(problem, value, ctx) -> boolean }
 * A sort strategy:    (a, b) -> number   (looked up by the value of the sort <select>)
 *
 * Pages compose the strategies they need instead of branching on strings.
 */
(function (Study) {
  const { ALL, STATUSES } = Study;

  const filters = {
    /* Match problem[field] against the <select> value. values: strings or {value,label}. */
    field(key, values, opts) {
      const field = (opts && opts.field) || key;
      return {
        key,
        selectId: `f-${key}`,
        options: [ALL, ...values],
        test: (p, value) => value === ALL || String(p[field]) === value,
      };
    },
    /* Match the live status of the problem (comes from the status store). */
    status(statuses) {
      return {
        key: "status",
        selectId: "f-status",
        options: [ALL, ...(statuses || STATUSES)],
        test: (p, value, ctx) => value === ALL || ctx.status.get(p.id) === value,
      };
    },
  };

  const sorts = {
    /* Higher score first; ties keep the original order. */
    descBy: (score) => (a, b) => score(b) - score(a) || a.order - b.order,
  };

  Study.filters = filters;
  Study.sorts = sorts;
})((window.Study = window.Study || {}));
