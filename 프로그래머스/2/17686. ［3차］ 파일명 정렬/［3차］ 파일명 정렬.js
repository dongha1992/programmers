
const extractString = (str) => {
  return str.match(/[a-zA-Z]+/g).join('');
};

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

const solution = (files) => {
  const splitedArr = [];

  for (let i = 0; i < files.length; i++) {
    const [HEAD, NUMBER, TAIL] = getFormatFile(files[i]);
    console.log(HEAD, NUMBER, TAIL);
    splitedArr.push([HEAD, NUMBER, TAIL]);
  }

  const sortedByHeadArr = splitedArr.sort((a, b) => {
    const headA = a[0];
    const headB = b[0];
    const numberA = a[1];
    const numberB = b[1];

    if ((headA).toLowerCase() < (headB).toLowerCase())
      return -1;
    else if (
      (headA).toLowerCase() > (headB).toLowerCase()
    )
      return 1;
    else {
      if (Number(numberA) < Number(numberB)) return -1;
      else if (Number(numberA) > Number(numberB)) return 1;
      else return 0;
    }
  });

  return sortedByHeadArr.map((a) => a.join(''));
};


