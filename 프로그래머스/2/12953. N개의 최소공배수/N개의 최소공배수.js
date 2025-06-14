function solution(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur))
}

function gcd(a, b) {
  let r
  while(b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}