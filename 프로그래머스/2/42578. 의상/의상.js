function solution(clothes) {
  const categoryByType = clothes.reduce((acc, [item, type]) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return Object.values(categoryByType).reduce((acc, count) => acc * (count + 1), 1) - 1;
}