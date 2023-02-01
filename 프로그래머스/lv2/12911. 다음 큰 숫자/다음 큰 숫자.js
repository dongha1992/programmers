function solution(n) {
  let isNumberOfOneSame = false;
  let numberOfOneForTarget = 0;
  let minNumberOfNextNumber = 0;
  let index = 1;
  const target = n.toString(2);

  for (let i = 0; i < target.length; i++) {
    if (target[i] === '1') {
      numberOfOneForTarget++;
    }
  }

  while (!isNumberOfOneSame) {
    let formatNumber = (n + index).toString(2);
    let numberOfOne = 0;
    for (let i = 0; i < formatNumber.length; i++) {
      if (formatNumber[i] === '1') {
        numberOfOne++;
      }
    }
    if (numberOfOne === numberOfOneForTarget) {
      minNumberOfNextNumber = formatNumber;
      break;
    }
    index++;
  }
  return parseInt(minNumberOfNextNumber, 2)
}