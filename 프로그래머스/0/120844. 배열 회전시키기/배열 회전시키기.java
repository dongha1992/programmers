class Solution {
    public int[] solution(int[] numbers, String direction) {
        int[] answer = numbers.clone();

        if(direction.equals("right")){
            int lastElement = answer[answer.length-1];
            System.arraycopy(answer, 0, answer, 1, answer.length - 1);
            answer[0] = lastElement;
        } else {
            int firstElement = answer[0];
            System.arraycopy(answer, 1, answer, 0, answer.length - 1);
            answer[answer.length - 1] = firstElement;
        }
        return answer;
    }
}