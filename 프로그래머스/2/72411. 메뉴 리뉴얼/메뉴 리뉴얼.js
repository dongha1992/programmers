
function solution(orders, course) {
  const arr = [];
  const answer = [];
  let tmp = [];

  const dfs = (nums, k, tmp, L) => {
    if (k === L) {
      arr.push(
        tmp
          .slice()
          .sort()
          .join("")
      );
    } else {
      for (let i = 0; i < nums.length; i++) {
        tmp.push(nums[i]);
        dfs(nums.slice(i + 1), k, tmp, L + 1);
        tmp.pop();
      }
    }
  };

  for (let i = 0; i < course.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      dfs(orders[j], course[i], tmp, 0);
    }
  }

  let map = new Map();

  for (let order of arr) {
    if (map.has(order)) {
      map.set(order, map.get(order) + 1);
    } else {
      map.set(order, 1);
    }
  }

  map = [...map].sort((a, b) => {
    return b[1] - a[1];
  });

  for (let i = 0; i < course.length; i++) {
    const c = course[i];
    let max = 0;
    let menu = [];
    for ([k, v] of map) {
      if (k.length === c && v >= 2) {
        if (max <= v) {
          max = v;
          menu.push(k);
        }
      }
    }
    answer.push(...menu);
  }

  return answer.sort();
}
