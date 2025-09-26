function factorial(n) {
  if (n == 1) return 1;
  else return n * factorial(n - 1);
}
function squareRoot(n) {
  return Math.sqrt(n);
}
module.exports = { factorial, squareRoot };
