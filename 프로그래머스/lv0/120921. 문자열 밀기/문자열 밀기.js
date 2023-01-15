function solution(A, B) {
let answer = 0;
let stack = A.split('');
let cnt = 0;

const check = (str, B) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== B[i]) return false;
  }
  return true;
};

while (stack.length) {
  if (check(stack.join(''), B)) break;
  if (cnt > stack.length) break;
  stack.unshift(stack.pop());
  cnt++;
}
answer = cnt > stack.length ? -1 : cnt;
return answer;

}