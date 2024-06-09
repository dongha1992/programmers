class Solution {
    
    public enum Coffee {
        INSTANCE; 

        private final int price = 5500;

        public int[] getAmountCoffee(int money) {
            int[] result = new int[2];
            result[0] = money / price; 
            result[1] = money % price;
            return result;
        }
    }

    public int[] solution(int money) {
        int[] answer = Coffee.INSTANCE.getAmountCoffee(money);
        return answer;
    }
}