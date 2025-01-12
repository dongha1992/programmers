function solution(m, musicinfos) {
   m = replacer(m);
  musicinfos = formatMusicInfo(musicinfos);
  let answer = [];

  for (let i = 0; i < musicinfos.length; i++) {
    let [time, title, melody] = getMusicInfo(musicinfos[i]);

    if (time >= melody.length) {
      melody = getPlayedMelody(melody,time, m);
    } else {
      melody = melody.slice(0, time);
    }

    if (getSubStr(melody, m)) answer.push([time, i, title]);
  }

  if (answer.length == 0) return '(None)';
    
  answer =
    answer.length === 1
      ? answer.map((a) => a[2])
      : answer
          .sort((a, b) => b[0] - a[0] || a[1] - b[1])
          .map((v) => v[2]);

  return answer[0];
}

function getSubStr(melody, m) {
  const max = melody.length >= m.length ? melody : m;
  const min = melody.length >= m.length ? m : melody;
  let flag = false;

  for (let i = 0; i < max.length; i++) {
    if (max[i] === min[0]) {
      if (max.slice(i, min.length + i) === m) {
        flag = true;
      }
    }
  }
  return flag;
}

function formatMusicInfo(musicinfos) {
  return musicinfos.map((m) => {
    const [start, end] = m.split(',');
    const time = getMinutes(start, end);
    return [time, ...m.split(',')];
  });
}

function getMinutes(start, end) {
  let s = start.split(':');
  let e = end.split(':');
  let hh = (+e[0] - +s[0]) * 60;
  let mm = +e[1] - +s[1];
  return hh + mm;
}

function getMusicInfo(musicinfo) {
  const time = musicinfo[0];
  const title = musicinfo[3];
  const melody = replacer(musicinfo[4]);
  return [time, title, melody];
}

function replacer(melody) {
  return melody.replace(/(\D)#/g, (s, p1) => p1.toLowerCase());
}

function getPlayedMelody(melody, time, m) {
  const diff = time - melody.length;
  const share = Math.ceil(diff / m.length);
  const rest = diff % m.length;
  return melody.repeat(time / melody.length + 1);
}

