function find(arr, el) {
    return arr.indexOf(el)===-1?"Not found":arr.indexOf(el);
  }

//other ways
var find = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";
