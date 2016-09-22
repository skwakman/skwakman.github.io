'use strict'

function goto(nr) {
  history.replaceState(null, null, window.location.href + '#' + nr);
  window.location.href = nr + '.html';
}
