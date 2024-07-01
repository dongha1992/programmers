class Solution {
    public int solution(int n) {
        int answer = 0;
        for(int i = 1; i < 11; i++){
            int result = factorial(i);
            if(n < result) {
                answer = i - 1;
                break;
            } else if(n == result){
                answer = i;
                break;
            }
         }
        return answer;
    }
    
    public int factorial(int n){
        if(n == 0 || n == 1) return 1;
        else return n * factorial(n - 1);
    }
}