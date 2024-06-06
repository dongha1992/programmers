class Solution {
    public double solution(int[] numbers) {
        double sum = 0;
        
        for(int number: numbers){
            sum += number;
        }
        
        double answer = sum / numbers.length;
        return answer;
    }
}