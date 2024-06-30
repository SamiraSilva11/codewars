function switcheroo(x) {
    return x.replace(/[ab]/g, char => char === 'a' ? 'b' : 'a');
  }