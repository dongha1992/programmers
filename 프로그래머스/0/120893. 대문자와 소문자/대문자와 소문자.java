class Solution {
    public String solution(String my_string) {
        String answer = "";
        for(char str : my_string.toCharArray()){
             if (Character.isLowerCase(str)) {
                answer += Character.toUpperCase(str);
            } else if (Character.isUpperCase(str)) {
                answer += Character.toLowerCase(str);
            } else {
                answer += str; 
            }
        }
          return answer;
    }
}