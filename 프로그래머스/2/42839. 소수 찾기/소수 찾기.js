function solution(numbers) {
  const arr = numbers.split('').map(v => Number(v))
  const allPermutations = allPermutation(arr)
  const answer = [];

  const setToArr = [...new Set(allPermutations.map((a) => +a.join('')))]
    
  for (let i = 0; i < setToArr.length; i++) {
    answer.push(isPrime(setToArr[i]));
  }

  return answer.filter((a) => a).length;
}

const isPrime = (n) => {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

function allPermutation(arr) {
  const result = [];
  const visited = new Array(arr.length).fill(false);

  function dfs(path) {
    if (path.length > 0) {
      result.push(path);
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs([...path, arr[i]]);
      visited[i] = false;
    }
  }

  dfs([]);
  return result;
}
