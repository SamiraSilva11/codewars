// return masked string
function maskify(cc) {
  return cc.length<5 ? cc : '#'.repeat(cc.length - 4) + cc.slice(-4);
}