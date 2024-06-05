function solution(numbers, num1, num2) {
    const answer = []
    for(let i = 0; i < numbers.length; i++){
        if(i > num2) break;
        if(i >= num1 && i <= num2) answer.push(numbers[i])
    }
    return answer
}