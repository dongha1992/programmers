function solution(cards1, cards2, goal) {
    let goalCopy = goal.slice()
    for(let i = 0; i < goal.length; i++){
        const targetLetter = goal[i]
        if(targetLetter === cards1[0]){
            cards1.shift()
            goalCopy.shift()
        } else if(targetLetter === cards2[0]){
            cards2.shift()
            goalCopy.shift()
        }
    }
    return goalCopy.length === 0 ? 'Yes' : "No";
    
}