function solution(begin, target, words) {
  const n = words.length;
  const visited = Array.from({ length: n }).fill(false);

  const queue = [[begin, 0]];

  while (queue.length) {
    const [word, step] = queue.shift();
      
    if (word === target) return step;
      
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;

      if (compareWord(word, words[i])) {
        visited[i] = true;
        queue.push([words[i], step + 1]);
      }
    }
  }

  function compareWord(word1, word2) {
    let arr = [...word2];

    for (let i = 0; i < word1.length; i++) {
      const index = arr.indexOf(word1[i]);
      if (index > -1) {
        arr.splice(index, 1);
      }
    }

    return arr.length === 1;
  }

  return 0
}

