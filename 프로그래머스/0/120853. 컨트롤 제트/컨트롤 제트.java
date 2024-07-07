import java.util.Arrays;

class Solution {
    public int solution(String s) {
        int answer = 0;
        String[] arr = s.split(" ");
        int prev = 0;

        for(int i = 0; i < arr.length; i++){
            if(arr[i].equals("Z")){
                answer -= prev;
            } else {
                prev = Integer.parseInt(arr[i]);
                answer += prev;
            }
        }
        return answer;
    }
}