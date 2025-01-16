function solution(orders, course) {
  const getCombinations = (arr, k) => {
    const result = [];

    const dfs = (l, current) => {
      if (current.length == k) {
        result.push(current.sort().join(''));
        return;
      } else {
        for (let i = l; i < arr.length; i++) {
          dfs(i + 1, [...current, arr[i]]);
        }
      }
    };
    dfs(0, []);
    return result;
  };

  const countMenus = (menuCombinations) => {
    const menuMap = new Map();
    menuCombinations.forEach((m) => {
      menuMap.set(m, (menuMap.get(m) || 0) + 1);
    });
    return menuMap;
  };

  const groupByLength = (menuMap) => {
    const grouped = {};
    for (const [m, c] of menuMap) {
      const len = m.length;
      if (!grouped[len]) grouped[len] = [];
      grouped[len].push([m, c]);
    }
    return grouped;
  };

  const findMaxCountMenus = (group) => {
    if (!group) return [];
    const maxCount = Math.max(...group.map(([, count]) => count));
    return group
      .filter(([, count]) => count === maxCount && count >= 2)
      .map(([menu]) => menu);
  };
  const menuCombinations = course.flatMap((k) =>
    orders.flatMap((order) => getCombinations(order, k))
  );
  const menuMap = countMenus(menuCombinations);
  const grouped = groupByLength(menuMap);

  return course.flatMap((len) => findMaxCountMenus(grouped[len])).sort();
}


