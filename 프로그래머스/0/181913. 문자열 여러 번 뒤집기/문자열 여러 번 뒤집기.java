import java.util.Arrays;

class Solution {
    public String solution(String my_string, int[][] queries) {
        String[] answer = my_string.split("");
        
        for(int[] q : queries) {
            int l = q[0];
            int r = q[1];
            while(l < r){
              String temp = answer[l];
              answer[l] = answer[r];
              answer[r] = temp;
              l++;
              r--;  
            }                                     
        }
        
        return String.join("", answer);
    }
}