function solution(user_id, banned_id) {
  const n = user_id.length;
  const k = banned_id.length;
  const temp = Array.from({ length: k }).fill(0);
  const answer = new Set()
  let ch = Array.from({ length: n}).fill(0);

  const dfs = (l, arr=[]) => {
    if (l === k) {
      answer.add(arr.sort().join(','));
    } else {
      for (let i = 0; i < n; i++) {
           const user = user_id[i]
           if(ch[i]) continue;
           if(checkIsBannedId(user, banned_id[l])){
               if(!ch[i]){
                 ch[i] = 1
                 temp[l] = user_id[i];
                 dfs(l+1, [...arr, user_id[i]]) 
                 ch[i] = 0
               }
           }
        }
      }
  };

  dfs(0, []);
  return answer.size
}

function checkIsBannedId(id, banned, ch) {
  if (id.length !== banned.length) return false;
  for (let i = 0; i < id.length; i++) {
    const joker = banned[i] === '*';
    if (!joker && id[i] !== banned[i]) {
      return false;
    }
  }
  return true;
}