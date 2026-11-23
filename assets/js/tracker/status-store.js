"use strict";
/*
 * Per-problem status (todo / doing / done), persisted to localStorage.
 * Built on the Observer: subscribers receive (statusMap, [changedIds]).
 * Persistence is just one more subscriber, so there is a single place that writes.
 */
(function (Study) {
  Study.createStatusStore = function createStatusStore(storageKey, statuses) {
    const initial = Study.storage.readJSON(storageKey, {});
    const obs = Study.createObservable(initial);
    obs.subscribe((map) => Study.storage.writeJSON(storageKey, map));

    return {
      get: (id) => obs.get()[id] || statuses[0],
      set: (id, value) => obs.set({ [id]: value }),
      subscribe: obs.subscribe,
    };
  };
})((window.Study = window.Study || {}));
