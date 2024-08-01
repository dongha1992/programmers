import java.util.*;

class Solution {
    public long solution(long n) {
        String[] strArr = Long.toString(n).split("");
         
        Arrays.sort(strArr);
        
        String sortedStr = "";
        
        for(int i = strArr.length-1; i >= 0; i--){
            sortedStr += strArr[i];
        }
        
        return Long.parseLong(sortedStr);
    }
}