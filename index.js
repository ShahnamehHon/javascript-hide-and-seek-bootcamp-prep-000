function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const a = document.querySelectorAll('.ranked-list li');
  for(let i = 0;i<a.length;i++) {
    a[i].innerHTML = parseInt(a[i].innerHTML)+n;
  }
}

function deepestChild() {
  
}