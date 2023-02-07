function solution(skill, skill_trees) {
let answer = skill_trees.length
  
for(let i = 0; i <skill_trees.length;i++){
  let queue = skill.split("")
  for(let j = 0; j < skill_trees[i].length; j++){
    if(queue.includes(skill_trees[i][j])){
     if(skill_trees[i][j]===queue[0]){
      queue.shift()
     } else {
       answer--
       break;
     }
    }
  }
}
  return answer
}