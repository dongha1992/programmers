class Solution {
    public double solution(int[] arr) {
        double answer = 0;
        int lt = 0;
        int rt = arr.length - 1;
        
        while(lt <= rt){
            answer += (lt == rt) ? arr[lt] : (arr[lt] + arr[rt]);
            lt++;
            rt--;
        }
        
        return answer / arr.length;
    }
}

