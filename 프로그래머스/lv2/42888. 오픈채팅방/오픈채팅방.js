function solution(record) {
  record = record.map((a) => a.split(' '));
  let answer = [];
  const recordMap = new Map();
  const messageMap = {
    Enter: '들어왔습니다.',
    Leave: '나갔습니다.',
  };

  for (let i = 0; i < record.length; i++) {
    const [act, userId, nick] = record[i];
    if (act !== 'Leave') {
      recordMap.set(userId, nick);
    }
  }

  answer = record
    .map((record) => {
      if (record[0] !== 'Change') {
        return `${recordMap.get(record[1])}님이 ${messageMap[record[0]]}`;
      }
    })
    .filter((a) => a);
  return answer;
}