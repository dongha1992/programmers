
function solution(want, number, discount) {
  const wantMap = {};
  let answer = [];

  for (let i = 0; i < discount.length; i++) {
    for (let j = 0; j < want.length; j++) {
      wantMap[want[j]] = number[j];
    }
    for (let j = i; j < i + 10; j++) {
      if (discount[j] && wantMap[discount[j]]) wantMap[discount[j]]--;
    }
    if (Object.values(wantMap).filter(a => a).length === 0) {
      answer.push(i + 1);
    }
  }
  return answer.length;
}
