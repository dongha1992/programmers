import java.util.*;

class Solution {
    public int solution(int n, int[] lost, int[] reserve) {
        int answer = 0;
        int[] students = new int[n+1];
    
        Arrays.fill(students, 1);
        Arrays.sort(reserve);
        
        for(int l : lost){
            students[l] -= 1;
        }
        
        for(int r : reserve){
            students[r] += 1;
        }
        
        for (int r : reserve) {
            int cur = r;
            int prev = r - 1;
            int next = r + 1;
           
            if(students[cur] < 2) continue;
            
            if (prev > 0 && students[prev] == 0) {
                students[prev] += 1; 
                students[cur] -= 1; 
            } else if (next <= n && students[next] == 0) {
                students[next] += 1; 
                students[cur] -= 1; 
            }   
        }
        
        return count(students);
    }
    
    
    public static int count(int[] array) {
        int count = 0;
        for (int i = 1; i < array.length; i++) {
            if (array[i] > 0) {
                count++;
            }
        }
        return count;
    }
}