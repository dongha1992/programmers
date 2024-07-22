import java.util.Stack;

public class Solution {
    public int[] solution(int []arr) {
       Stack<Integer> numberStack = new Stack<>();
        
       for(int n : arr){
           if(numberStack.isEmpty() || numberStack.peek() != n){
               numberStack.push(n);
           }
       }
     int[] answer = new int[numberStack.size()];
        for(int i = 0; i < answer.length; i++){
            answer[i] = numberStack.get(i);
        }
        return answer;
    }
}