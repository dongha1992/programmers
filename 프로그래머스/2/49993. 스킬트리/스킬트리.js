function solution(skill, skill_trees) {
    let answer = skill_trees.length
 
    for(let i = 0; i < skill_trees.length; i++){
        const queue = skill.split("");
        for(let j = 0; j < skill_trees[i].length; j++){
            const st = skill_trees[i][j];
            if(queue.includes(st)){
                if(st === queue[0]){
                    queue.shift()
                } else {
                    answer--;
                    break;
                }
            }
            
        }
    }
    return answer
}