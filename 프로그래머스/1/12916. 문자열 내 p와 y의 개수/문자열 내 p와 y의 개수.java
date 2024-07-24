class Solution {
    boolean solution(String s) {
        char target1 = 'p'; 
        char target2 = 'y';
        int cnt = 0;
        
        s = s.toLowerCase();
        
        for(int i = 0; i < s.length(); i++){
          char c = s.charAt(i); 
            
          if(c == target1) {
                cnt++;
            } else if(c == target2) {
                cnt--;
            }
        }
        
        return cnt == 0;
    }
}