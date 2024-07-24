class Solution {
    boolean solution(String s) {
        char target1 = 'p'; 
        char target2 = 'y';
        
        int cnt = 0;
        char[] charArr = s.toCharArray();
        
        for(char str : charArr){
            char lowerChar = Character.toLowerCase(str);
                
            if(lowerChar == target1){
                cnt++;
            } else if(lowerChar == target2){
                cnt--;
            }
        }
        
        return cnt == 0;
    }
}