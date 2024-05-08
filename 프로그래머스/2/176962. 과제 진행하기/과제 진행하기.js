
function solution(plans) {
  const stack = [];
  const answer = [];

  plans.sort((a, b) => {
    return convertTimeStrToMin(a[1]) - convertTimeStrToMin(b[1]);
  });

  for (let i = 0; i < plans.length - 1; i++) {
    const [sub, startTime, duration] = plans[i];
    const [nextSub, nextStartTime, nextDuration] = plans[i + 1];
    const endTime = convertTimeStrToMin(startTime) + Number(duration);
    let remainTime = work(endTime, convertTimeStrToMin(nextStartTime));

  if (remainTime > 0) {
      stack.push([sub, remainTime]);
    } else {
      answer.push(sub);
      if (remainTime < 0) {
        remainTime = Math.abs(remainTime);
        while (remainTime && stack.length ) {
          const [s, r] = stack.pop();
          if(remainTime >= r){
            answer.push(s);
            remainTime -= r
          } else {
            stack.push([s, r-remainTime])
            remainTime = 0
          }
        }
      }
    }

    const isLast = i + 1 === plans.length - 1;
    if (isLast) stack.push([nextSub, 0]);
  }

  while (stack.length) {
    const popped = stack.pop();
    answer.push(popped[0]);
  }

  return answer;
}

function convertTimeStrToMin(timeString) {
    const [hours, minutes] = timeString.split(':').map(Number);
    return hours * 60 + minutes;
}

function work (endTime, nextStartTime) {
  return endTime - nextStartTime
}