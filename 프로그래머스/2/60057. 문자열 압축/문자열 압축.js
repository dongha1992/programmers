
function solution(s) {
  let answer = Number.MAX_SAFE_INTEGER;

  const pressStr = (str, k) => {
    let tmp = '';
    let cnt = 1;
    for (let i = 0; i < str.length; i += k) {
      const cur = str.substring(i, i + k);
      const next = str.substring(i + k, i + 2 * k);

      if (cur === next) cnt++;
      else {
        tmp += cur;
        if (cnt > 1) tmp += String(cnt);
        cnt = 1;
      }
    }
    return tmp.length;
  };

  for (let i = 1; i <= s.length; i++) {
    if (answer >= pressStr(s, i)) {
      answer = pressStr(s, i);
    }
  }

  return answer;
}
