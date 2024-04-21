const solution = (expression) => {
  const defaultExpression = ['*', '+', '-'];
  const needExpressionLength = 3
  const formatArr = getFormatArr(expression);
  const expressionCombi = getCombination(
    defaultExpression,
    defaultExpression.length
  );
  let answer = 0;

  for (let i = 0; i < expressionCombi.length; i++) {
    const currentPriorityArr = expressionCombi[i];
    let copiedFormatArr = formatArr.slice();
    let currentPriority = 0;
    let lt = 0;
    
    let currentPriorityOp = currentPriorityArr[currentPriority]

    while (copiedFormatArr.length !== 1) {
      if (!filteredFormatArr(copiedFormatArr, currentPriorityOp)) {
        currentPriorityOp = currentPriorityArr[currentPriority++]
        lt = 0;
      }
      if (copiedFormatArr[lt] !== currentPriorityOp) lt++;
      else {
        const targetExpression = copiedFormatArr.splice(lt - 1, needExpressionLength);
        const result = operator(targetExpression);
        copiedFormatArr.splice(lt - 1, 0, result);
        lt = 0;
      }
    }
    const sum = Math.abs(copiedFormatArr[0])
    if (answer < sum) {
      answer = sum;
    }
  }
  return answer;
};

function operator(targetExpression) {
  const [n1, op, n2] = targetExpression;

  switch (op) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
  }
}
function filteredFormatArr(arr, op) {
  return arr.some((item) => item === op);
}

function getFormatArr(expression) {
  const regex = /([+\-*/])/g;
  return expression.split(regex).map((e) => (isNaN(e) ? e : Number(e)));
}

function getExpressionArr(expression) {
  const regex = /[^\d\s]/g;
  return expression.match(regex);
}

function getCombination(arr, m) {
  const n = arr.length;
  const ch = Array.from({ length: n }, () => 0);
  const tmp = Array.from({ length: m }, () => 0);
  const combination = [];

  const dfs = (l) => {
    if (l === m) {
      combination.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (!ch[i]) {
          ch[i] = 1;
          tmp[l] = arr[i];
          dfs(l + 1);
          ch[i] = 0;
        }
      }
    }
  };
  dfs(0);
  return combination;
}