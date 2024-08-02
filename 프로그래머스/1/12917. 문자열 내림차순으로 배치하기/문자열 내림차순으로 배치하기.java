import java.util.*;

class Solution {
    public String solution(String s) {
        char[] cArr = s.toCharArray();
        Arrays.sort(cArr);
        
        String answer = "";
        
        for(int i = cArr.length - 1; i >=0; i--){
            answer += cArr[i];
        }
        return answer;
    }
}