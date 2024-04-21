
const solution = (files) => {
  return files
    .map(getFormatFile)
    .sort(compareArrays)
    .map(part => joined(part, ""));
};


function getNumberPart(str) {
  let targetIndex = 0;
  for (let i = 0; i < Math.min(str.length, 5); i++) {
    if (isNaN(Number(str[i]))) {
      targetIndex = i;
      break;
    }
    targetIndex = i + 1;
  }
  return targetIndex;
}

function getFormatFile(str) {
  const headEndIndex = str.search(/\d+/);
  const _head = str.substr(0, headEndIndex);

  const numberAndTailStr = str.substr(headEndIndex, str.length);
  const numberEndIndex =
    getNumberPart(numberAndTailStr) ?? str.length - numberEndIndex;
  const _number = str.substr(headEndIndex, numberEndIndex);

  const _tail = numberEndIndex
    ? numberAndTailStr.substr(numberEndIndex, str.length)
    : '';

  return [_head, _number, _tail];
}

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


function joined(part, joint){
  return part.join(joint)
}
