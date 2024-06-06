class Solution {
    public enum Discount {
        NONE(0, 0.0),
        LEVEL1(100000, 0.05),
        LEVEL2(300000, 0.10),
        LEVEL3(500000, 0.20);
        
        private final int threshold;
        private final double rate;
        
        Discount(int threshold, double rate){
            this.threshold = threshold;
            this.rate = rate;
        }
        
        public static double getDiscountRate(int price) {
            if (price >= LEVEL3.threshold) {
                return LEVEL3.rate;
            } else if (price >= LEVEL2.threshold) {
                return LEVEL2.rate;
            } else if (price >= LEVEL1.threshold) {
                return LEVEL1.rate;
            } else {
                return NONE.rate;
            }
        }
        
    }
    
    public static int calculateDiscountedPrice(int price){
        double discountRate = Discount.getDiscountRate(price);
        double discountedPrice = price - (price * discountRate);
        return (int) discountedPrice;
    }
    
    public int solution(int price) {
        int discountedPrice = calculateDiscountedPrice(price);
        return discountedPrice;
    }
    
}