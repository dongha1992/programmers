import java.util.ArrayList;
import java.util.List;

class Solution {
    public String[] solution(String[] strArr) {
        String TARGET = "ad";
        List<String> answer = new ArrayList();
        
        for(int i = 0; i < strArr.length; i++){
            if(!strArr[i].contains(TARGET)) answer.add(strArr[i]);
        }
        return answer.toArray(new String[0]);
    }
}

