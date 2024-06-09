class Solution {
    public String solution(String my_string, String letter) {
        String answer = "";
        for(int i = 0; i < my_string.length(); i++){
            char currentChar = my_string.charAt(i);
             if (currentChar != letter.charAt(0)) {
                answer += currentChar;
            }
        }
        return answer;
    }
}