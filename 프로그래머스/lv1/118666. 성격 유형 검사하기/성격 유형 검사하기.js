function solution(survey, choices) {
   const convert = {
   7:3,
   6:2,
   5:1,
   3:1,
   2:2,
   1:3
 }
 const answer = [[["R",0], ["T",0]], [["C",0], ["F",0]],[["J",0], ["M",0]],[["A",0], ["N",0]]]

 const NULLITY = 4
 
 const getSurveryPoint = ([char, point]) => {
   for(let x in answer){
     const [mChar1, mChar2] = answer[x]
     if(char===mChar1[0]){
       mChar1[1] = mChar1[1]+convert[point]
     } else if(char===mChar2[0]){
       mChar2[1] = mChar2[1]+convert[point]
     }
   }
 }
 
 for(let i = 0; i < choices.length; i++){
   const no = survey[i][0];
   const yes = survey[i][1];
   if(choices[i] > NULLITY){
     getSurveryPoint([yes,choices[i]])
   } else if(choices[i] < NULLITY){
     getSurveryPoint([no, choices[i]])
   }
 }
  return answer.map(result =>{
    const [a, b]= result
    if(a[1] > b[1]){
      return a[0]
    } else if(a[1] < b[1]){
      return b[0]
    } else {
      return a[0]
    }
  }).join("")
}