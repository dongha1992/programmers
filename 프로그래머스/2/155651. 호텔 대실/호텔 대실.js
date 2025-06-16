function solution(book_time) {
  const timeTable = [];
  let answer = 0;
  let inCnt = 0;
  let outCnt = 0;

  for (let [s, e] of book_time) {
    timeTable.push(['s', convertTimeToNumber(s)]);
    timeTable.push(['e', convertTimeToNumber(e) + 10]);
  }
    
  timeTable.sort((a, b) => {
    if (a[1] === b[1]) return a[0] === 'e' ? -1 : 1;
    return a[1] - b[1];
  });
    

  let roomCnt = 0;
  let currentRooms = 0;
    
  for (let i = 0; i < timeTable.length; i++) {
    const [type, time] = timeTable[i];
    if(type === 's') {
      currentRooms++; 
      roomCnt = Math.max(roomCnt, currentRooms);
    }
      
    if(type === 'e'){
     currentRooms--; 
    }
  }

  return roomCnt;
}

function convertTimeToNumber(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}