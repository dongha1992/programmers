
function solution(n, k) {
  let answer = 0;
  let binary = n.toString(k).split('0').filter((a) => a !== '1' && a !== '');

  for(let i = 0; i < binary.length; i++){
    if(getPrimeNumber(binary[i])) answer++
  }
  return answer
}

const getPrimeNumber = (n) => {
  if(n === 2) return true;
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) return false
  }
  return true;
}
