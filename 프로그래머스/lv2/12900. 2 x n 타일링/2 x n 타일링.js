function solution(n) {
    // 1 -> 1
    // 2 -> 2
    // 3 -> 3
    // 4 -> 5
    
    let nums = []
    nums[0] = 0
    nums[1] = 1
    nums[2] = 2
    for(let i = 3; i <= n; i++){
        nums[i] = (nums[i-1] % 1000000007) + (nums[i-2] % 1000000007)
    }
    return nums[n] % 1000000007
}