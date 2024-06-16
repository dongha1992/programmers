class Solution {
    public int solution(String my_string) {
        int answer = 0;
        
        for(char str : my_string.toCharArray()){
            if(Character.isDigit(str)){
                answer += Character.getNumericValue(str);
            }
        }
        return answer;
    }
}