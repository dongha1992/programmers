function solution(video_len, pos, op_start, op_end, commands) {
  const MOVE_TIME = 10;

  const videoLenSec = toSeconds(video_len);
  const opStartSec = toSeconds(op_start);
  const opEndSec = toSeconds(op_end);
  let current = toSeconds(pos);

  const inOpening = (time) => time >= opStartSec && time <= opEndSec;

  if (inOpening(current)) {
    current = opEndSec;
  }

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i];

    if (command === 'next') {
      current = Math.min(current + MOVE_TIME, videoLenSec);
    } else if (command === 'prev') {
      current = Math.max(current - MOVE_TIME, 0);
    }

    if (inOpening(current)) {
      current = opEndSec;
    }
  }

  return toTimeString(current);
}

function toSeconds(hhmm) {
  const [hh, mm] = hhmm.split(':').map(Number);
  return hh * 60 + mm;
}

function toTimeString(totalSeconds) {
  const min = Math.floor(totalSeconds / 60);
  const sec = totalSeconds % 60;
  return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
