function solution(str1, str2) {
let n = 2;

 const helper = (str) => {
   let tmp = []
   let cnt = 0
    while(true){
     const sub = str.substr(cnt, 2)
     if(!/[\{\}\[\];:<>.,\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g.test(sub) && !/[0-9]/g.test(sub) &&!/\s/g.test(sub) && sub.length > 1){
     tmp.push(sub.toLowerCase()) 
     } 
     cnt++
     if(cnt >= str.length) break;
  }
   return tmp
 }
 
 const s1 = helper(str1)
 const s2 = helper(str2)
 
 
 if(s1.length===0 && s2.length===0) return 65536
  console.log(s1, s2)
 let diff = 0;
 let union = 0;
 for(let i =0; i < s1.length;i++){
   if(s2.indexOf(s1[i])!==-1){
     diff++
     s2.splice(s2.indexOf(s1[i]), 1)
   }
   union++
 }
  union+=s2.length
 const answer = (diff / union)
 return !isNaN(answer) ? parseInt((answer) * 65536) : 65536
}