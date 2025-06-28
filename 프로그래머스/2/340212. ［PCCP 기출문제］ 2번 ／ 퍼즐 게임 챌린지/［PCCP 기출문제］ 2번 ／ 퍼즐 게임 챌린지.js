function solution(diffs, times, limit) {
  const puzzle_process = (level) => {
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const time = times[i];
      const prevTime = i > 0 ? times[i - 1] : 0;

      if (diff > level) {
        const failTime = diff - level
        const retryTime = failTime * (time + prevTime) + time;
        totalTime += retryTime;
      } else {
        totalTime += time;
      }

      // if (totalTime > limit) return totalTime;
    }

    return totalTime;
  };

  let low = 1;
  let high = 100000
  let answer = high;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const totalTime = puzzle_process(mid);

    if (totalTime <= limit) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}

