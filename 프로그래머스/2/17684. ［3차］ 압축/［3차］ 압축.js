
const createAlphabetArray = () => {
  const startCharCode = 'A'.charCodeAt(0);
  const endCharCode = 'Z'.charCodeAt(0);
  const alphabetArray = [];

  for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
    const char = String.fromCharCode(charCode);
    alphabetArray.push(char);
  }

  return alphabetArray;
};

const getChar = (str, start, end) => {
  return str.substring(start, end);
};


function solution(msg) {
  const answer = [];
  const charMap = {};
  let startIndex = 0;
  let endIndex = msg.length;

  createAlphabetArray().forEach((char, index) => {
    charMap[char] = index + 1;
  });

  while (startIndex < msg.length) {
    const currentChar = getChar(msg, startIndex, endIndex);
    if (!charMap[currentChar]) {
      endIndex--;
    } else {
      answer.push(charMap[currentChar]);
      const nextChar = currentChar + getChar(msg, endIndex, endIndex + 1);
      const size = Object.values(charMap).length;
      charMap[nextChar] = size + 1;
      startIndex = endIndex;
      endIndex = msg.length;
    }
  }

  return answer;
}

