function solution(n, memo={}) {
  // 재귀 마지막 두 문제 런타임 에러(스택오버플로우일듯)
    
  // if(memo[n]) return memo[n];
  // if(n < 2) return n;
  // return memo[n] = (solution(n - 1, memo) + solution(n - 2, memo)) % 1234567
    
    let answer = fibo(n) % 1234567;
    return answer;
}

const fibo = (n) => {
    let nums = [];
    nums[0] = 0;
    nums[1] = 1;
    nums[2] = 1;
    for (let i = 3; i <= n; i++) {
        nums[i] = (nums[i-1]%1234567 + nums[i-2]%1234567);
    }
    return nums[n];
}