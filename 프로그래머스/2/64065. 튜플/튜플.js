function solution(s) {
  s = s.replace(/\}/g, ']').replace(/\{/g, '[');
  const arr = JSON.parse(s).sort((a, b) => a.length - b.length);

  return arr.reduce((answer, tuple) => {
    const rest = tuple.filter((t) => !answer.includes(t));
    return [...answer, ...rest];
  }, []);
}
