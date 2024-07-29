import java.util.Stack;

class Solution {
    boolean solution(String s) {
      if (s.length() == 1 || s.charAt(0) == ')') return false;

        Stack<Character> stack = new Stack<>();

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            
            if (c == '(') stack.push(c);
            else if (c == ')') {
                if (stack.isEmpty()) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.isEmpty();
    }
}