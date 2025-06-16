function solution(storey) {
    let stone = 0;
    let carry = 0;
    
    while(storey > 0 || carry > 0) {
        const curr = (storey % 10) + carry
        storey = Math.floor(storey / 10);
        carry = 0;
        
        if (curr > 5) {
            stone += 10 - curr;
            carry = 1;
        } else if(curr < 5) {
            stone += curr;
        } else {
            stone += 5;
            carry = (storey % 10 >= 5) ? 1 : 0;
        }
    }
    return stone
}