function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const a = document.querySelectorAll('.ranked-list');
  for(let i = 0;i<a.length;i++) {
    a[i] = parseInt(a[i])
  }
}