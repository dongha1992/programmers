
function solution(n, k) {
  let answer = 0;

  let toSamJinsu = n
    .toString(k)
    .split('0')
    .filter((a) => a !== '1' && a !== '');

  const getPrime = (n) => {
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < toSamJinsu.length; i++) {
    if (getPrime(toSamJinsu[i])) answer++;
  }
  return answer;
}
