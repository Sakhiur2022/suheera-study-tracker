"use strict";
/*
 * Observer pattern.
 * A small observable state container: set(patch) merges the patch, and every
 * subscriber is called with (newState, changedKeys) — but only if something
 * actually changed. Renderers subscribe instead of being called by hand.
 */
(function (Study) {
  Study.createObservable = function createObservable(initial) {
    let state = Object.assign({}, initial);
    const subscribers = new Set();

    return {
      get: () => state,
      set(patch) {
        const changed = Object.keys(patch).filter((k) => state[k] !== patch[k]);
        if (!changed.length) return false;
        state = Object.assign({}, state, patch);
        subscribers.forEach((fn) => fn(state, changed));
        return true;
      },
      subscribe(fn) {
        subscribers.add(fn);
        return () => subscribers.delete(fn);
      },
    };
  };
})((window.Study = window.Study || {}));
