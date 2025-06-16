function solution(order) {
    let answer = 0;
    let current = 1;
    const stack = [];
    
    for(let i = 0; i < order.length; i++) {
        const target = order[i];
        
        while(current <= target) {
            stack.push(current);
            current++;
        }
        
        if (stack[stack.length - 1] === target) {
            stack.pop();
            answer++;
        } else {
            break;
        }
    }
    return answer;
}