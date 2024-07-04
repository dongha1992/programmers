class Solution {
    public int solution(int num, int k) {
        int answer = 0;
        String numberStr = Integer.toString(num);
        int[] digits = new int[numberStr.length()];
        for (int i = 0; i < numberStr.length(); i++) {
            digits[i] = Character.getNumericValue(numberStr.charAt(i));
        }
        
        for(int i = 0; i < digits.length; i++){
            if(digits[i] == k) return i+1;
        }
        return -1;
    }
}