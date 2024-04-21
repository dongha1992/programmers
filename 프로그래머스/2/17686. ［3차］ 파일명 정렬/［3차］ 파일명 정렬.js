const getNumberPart = (str) => {
  let targetIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i])) && i < 5) {
      targetIndex = i;
      break;
    }
    if (i >= 5) {
      targetIndex = i;
      break;
    }
  }
  return targetIndex;
};

const getFormatFile = (str) => {
  const headEndIndex = str.search(/\d+/);
  const _head = str.substr(0, headEndIndex);

  const numberAndTailStr = str.substr(headEndIndex, str.length);
  const numberEndIndex = getNumberPart(numberAndTailStr);

  const _number = str.substr(
    headEndIndex,
    numberEndIndex ? numberEndIndex : str.length - numberEndIndex
  );

  const _tail = numberEndIndex
    ? numberAndTailStr.substr(numberEndIndex, str.length)
    : '';
    
  return [_head, _number, _tail];
};

function compareArrays(a, b) {
  const headA = a[0].toLowerCase();
  const headB = b[0].toLowerCase();
  const numberA = Number(a[1]);
  const numberB = Number(b[1]);

  if (headA < headB) return -1;
  if (headA > headB) return 1;
  if (numberA < numberB) return -1;
  if (numberA > numberB) return 1;
  return 0;
}

const solution = (files) => {
  const splitedArr = [];

  for (let i = 0; i < files.length; i++) {
    const [HEAD, NUMBER, TAIL] = getFormatFile(files[i]);
    splitedArr.push([HEAD, NUMBER, TAIL]);
  }

  const sortedByHeadArr = splitedArr.sort(compareArrays);

  return sortedByHeadArr.map((a) => a.join(''));
};
