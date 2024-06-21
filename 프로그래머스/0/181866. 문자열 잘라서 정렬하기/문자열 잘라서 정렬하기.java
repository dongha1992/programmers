import java.util.Arrays;
import java.util.ArrayList;

class Solution {
    public String[] solution(String myString) {
        String[] splitedArr = myString.split("x");
        ArrayList<String> list = new ArrayList<>();
        
        for(String str: splitedArr){
            if(!str.isEmpty()) list.add(str);
        }
        
        String[] answer = list.toArray(new String[0]);
        Arrays.sort(answer);

        return answer;

    }
}