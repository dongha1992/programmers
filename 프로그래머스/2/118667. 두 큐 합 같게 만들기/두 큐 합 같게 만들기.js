function solution(queue1, queue2) {
 const total = getSum([...queue1, ...queue2]);
  let cnt = 0;
  let answer = 0;
  let lt = 0;
  let rt = 0;
  let sum1 = getSum(queue1);
  let sum2 = getSum(queue2);
  let max = (queue1.length * 2) + 1
  
  while (true) {
    if(max < cnt) return -1
    if (sum1 > sum2) {
      const q1 = queue1[lt]
      queue2.push(q1);
      sum1 -= q1;
      sum2 += q1;
      lt++
      answer++
    } else if(sum1 < sum2){
      const q2 = queue2[rt]
      queue1.push(q2);
      sum1 += q2;
      sum2 -= q2;
      answer++
      rt++
    }

    cnt++;
    if (sum1 === sum2) break;
  }

  return answer;
}

function getSum(list) {
  return list.reduce((acc, cur) => acc + cur, 0);
}
