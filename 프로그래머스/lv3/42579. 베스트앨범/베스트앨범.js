
function solution(genres, plays) {
  const countMap = new Map();
  const songsMap = new Map();
  const genresMap = new Map();
  const answer = [];

  for (let i = 0; i < genres.length; i++) {
    if (countMap.has(genres[i])) {
      countMap.set(genres[i], countMap.get(genres[i]) + plays[i]);
    } else {
      countMap.set(genres[i], plays[i]);
    }
  }

  const countArr = [...countMap]
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((a) => a[0]);

  let songsArr = genres
    .map((a, i) => {
      return {
        index: i,
        genre: a,
        play: plays[i],
        priority: countArr.indexOf(a),
      };
    })
    .sort((a, b) => {
      if (a.priority < b.priority) return -1;
      if (a.priority > b.priority) return 1;

      if (a.play > b.play) return -1;
      if (a.play < b.play) return 1;

      if (a.plays === b.plays) return a[0] - b[0];
    });

  for (let i = 0; i < songsArr.length; i++) {
    const g = songsArr[i].genre;

    if (genresMap.has(g)) {
      if (genresMap.get(g).cnt >= 2) continue;
      genresMap.set(g, { cnt: genresMap.get(g).cnt + 1 });
    } else {
      genresMap.set(g, { cnt: 1 });
    }
    answer.push(songsArr[i]);
  }
  return answer.map((i) => i.index);
}
