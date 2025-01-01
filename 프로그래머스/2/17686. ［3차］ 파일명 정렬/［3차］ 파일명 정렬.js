
const START_INDEX = 0;

const solution = (files) => {
  return files
    .map(getApartFile)
    .sort(sortFile)
    .map((part) => getJoined(part, ''));
};

const getJoined = (part, joint) => {
  return part.join(joint);
};

const sortFile = (a, b) => {
  const headA = a[0].toLowerCase();
  const headB = b[0].toLowerCase();
  const numberA = Number(a[1]);
  const numberB = Number(b[1]);

  if (headA !== headB) return headA.localeCompare(headB);
  return numberA - numberB;
};

const getTail = (str, headEndIndex, numberEndIndex) => {
  if (numberEndIndex < 0) return '';
  return str.substr(numberEndIndex + headEndIndex);
};

const getNumber = (str) => {
  const endIndex = str.search(/\D/);
  if (endIndex < 0) return [str, -1];
  return [str.substr(START_INDEX, endIndex), endIndex];
};

const getHead = (str) => {
  const endIndex = str.search(/\d+/);
  return [str.substr(START_INDEX, endIndex), endIndex];
};

const getApartFile = (str) => {
  const [head, headEndIndex] = getHead(str);
  const [number, numberEndIndex] = getNumber(str.substr(headEndIndex));
  const tail = getTail(str, headEndIndex, numberEndIndex);
  return [head, number, tail];
};
