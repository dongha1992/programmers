class Solution {
     public enum Coffee {
        AMERICANO_ICE("iceamericano", 4500),
        AMERICANO_ICE_ALT("americanoice", 4500),
        AMERICANO_HOT("hotamericano", 4500),
        AMERICANO_HOT_ALT("americanohot", 4500),
        AMERICANO("americano", 4500),
        LATTE_ICE("icecafelatte", 5000),
        LATTE_ICE_ALT("cafelatteice", 5000),
        LATTE_HOT("hotcafelatte", 5000),
        LATTE_HOT_ALT("cafelattehot", 5000),
        LATTE("cafelatte", 5000),
        ANYTHING("anything", 4500);
         
        private final String coffee;
        private final int price;

        Coffee(String coffee, int price){
            this.coffee = coffee;
            this.price = price;
        }

        public static int getCoffeePrice(String coffee) {
            for(Coffee c : Coffee.values()) {
                if(c.coffee.equalsIgnoreCase(coffee)) return c.price;
            }
            return 0; 
        }
    }
    
    public int solution(String[] order) {
        int answer = 0;
        
        for(String coffee : order){
            answer += Coffee.getCoffeePrice(coffee);
        }
        return answer;
    }
}