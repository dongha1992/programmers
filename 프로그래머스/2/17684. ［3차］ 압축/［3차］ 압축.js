function solution(msg) {
  const charMap = createCharMap();
  const answer = [];
  let startIndex = 0;
  let endIndex = msg.length;

  while (startIndex < endIndex) {
    const currentChar = getChar(msg, startIndex, endIndex);
    const foundChar = charMap[currentChar];

    if (!foundChar) {
      endIndex--;
      continue;
    } 
    
    answer.push(foundChar);
    const nextChar = currentChar + getChar(msg, endIndex, endIndex + 1);
    const size = getMapSize(charMap);
    charMap[nextChar] = size + 1;
    startIndex = endIndex;
    endIndex = msg.length;
  }
  
  return answer;
}


const createAlphabet = () => {
  const startCode = 'A'.charCodeAt(0);
  const endCode = 'Z'.charCodeAt(0);
  const result = [];

  for (let i = startCode; i <= endCode; i++) {
    const char = String.fromCharCode(i);
    result.push(char);
  }
  return result;
};

const createCharMap = () =>
  createAlphabet().reduce((map, char, index) => {
    map[char] = index + 1;
    return map;
  }, {});

const getMapSize = (charMap) => {
  return Object.values(charMap).length;
};

const getChar = (str, start, end) => str.substring(start, end);


