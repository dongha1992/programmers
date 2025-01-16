function solution(p) {
  if (p.length === 0) return '';
  if (checkCorrectParentheses(p)) return p;

  function checkCorrectParentheses(p) {
    let count = 0;

    for (const char of p) {
      if (char === '(') {
        count++;
      } else if (char === ')') {
        if (count === 0) return false;
        count--;
      }
    }
    return count === 0;
  }

  function checkBalanceParentheses(p) {
    let openCount = 0;
    let result = '';

    for (const char of p) {
      if (char === '(') {
        openCount++;
      } else if (char === ')') {
        openCount--;
      } else {
        continue;
      }

      result += char;

      if (openCount === 0 && result.length > 0) {
        break;
      }
    }

    return result;
  }

  function generateStr(p) {
    return p
      .slice(1, -1)
      .split('')
      .map((char) => (char === '(' ? ')' : '('))
      .join('');
  }

  function splitParentheses(p) {
    if (p.length === 0) return '';
    let u = checkBalanceParentheses(p);

    if (u.length !== 0) {
      let v = p.slice(u.length);

      if (checkCorrectParentheses(u)) {
        return u + splitParentheses(v);
      } else {
        return '(' + splitParentheses(v) + ')' + generateStr(u);
      }
    }
  }

  return splitParentheses(p);
}