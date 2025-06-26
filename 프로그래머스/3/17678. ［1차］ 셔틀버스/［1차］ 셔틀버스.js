
function solution(n, t, m, timetable) {
  const BUT_START_TIME = 540;

  timetable = timetable.map((t) => stringTimeToNumber(t)).sort((a, b) => a - b);
  const len = timetable.length;

  let lt = 0;
  let index = 0;
  let currentTime = BUT_START_TIME;

  while (lt < n) {
    let crews = 0;
    while (crews < m && index < len && timetable[index] <= currentTime) {
      index++;
      crews++;
    }

    if (lt === n - 1) {
      if (crews < m) {
        return numberTimeToString(currentTime);
      } else {
        return numberTimeToString(timetable[index - 1] - 1);
      }
    }
    lt++;
    currentTime += t;
  }
}

function stringTimeToNumber(timeString) {
  const [hours, minutes] = timeString.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  return totalMinutes;
}

function numberTimeToString(totalMinutes) {
  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;

  return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}