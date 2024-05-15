function solution(s) {
  let max = 0;

  const checkPalindrome = (str) => {
    const len = str.length;
    let mid = Math.floor(len / 2);
    if(str[0] !== str[str.length-1]) return false
      
    for (let i = 0; i < mid; i++) {
      if (str.charAt(i) !== str.charAt(len - 1 - i)) {
        return false;
      }
    }
      
    return str.length;
  };

  for (let i = 0; i < s.length; i++) {
    let str = '';
    for (let j = i; j < s.length; j++) {
      str += s[j];
      if(str.length < max) continue;
      if (checkPalindrome(str) > max) {
        max = checkPalindrome(str);
      }
    }
  }
  return max;
}
