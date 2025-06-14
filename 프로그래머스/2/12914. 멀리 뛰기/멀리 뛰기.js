function solution(n) {
  const dp = Array.from({length : n}).fill(null)
  
  dp[0] = 1
  dp[1] = 2  
  
  for(let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] % 1234567
  } 
  
  return dp[n-1] % 1234567
}
