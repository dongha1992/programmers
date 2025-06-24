
function solution(gems) {
  const n = gems.length;
  const gemKinds = new Set(gems).size;
  const gemCount = new Map();

  let answer = [0, n - 1];
  let lt = 0,
    rt = 0;

  gemCount.set(gems[0], 1);

  while (lt <= rt && rt < n) {
    if (gemCount.size === gemKinds) {
      if (rt - lt < answer[1] - answer[0]) {
        answer = [lt, rt];
      }

      const leftGem = gems[lt];
      gemCount.set(leftGem, gemCount.get(leftGem) - 1);
      if (gemCount.get(leftGem) === 0) {
        gemCount.delete(leftGem);
      }
      lt++;
    } else {
      rt++;
      const rightGem = gems[rt];
      if (rightGem !== undefined) {
        gemCount.set(rightGem, (gemCount.get(rightGem) || 0) + 1);
      }
    }
  }
  return [answer[0] + 1, answer[1] + 1];
}

