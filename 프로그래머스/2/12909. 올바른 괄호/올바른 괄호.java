import java.util.Stack;

class Solution {
    boolean solution(String s) {
        Stack<Character> stackStr = new Stack<>();
        
        for(int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            
            if(isOpenBracket(c)) stackStr.push(c);
            else if(stackStr.isEmpty() || !isMatchingPair(stackStr.pop(), c)) return false;
            
        }
        return stackStr.isEmpty();
    }
    
       private boolean isOpenBracket(char c) {
        return c == '(' || c == '[' || c == '{';
    }
    
        private boolean isMatchingPair(char open, char close){
        return (open == '(' && close == ')') ||
               (open == '[' && close == ']') ||
               (open == '{' && close == '}');
    }
}