class Solution {
    public int solution(int n, int k) {
        int service = n / 10;
        int yang = 12000;
        int drink = 2000;
        return (n * yang) + ((k - service) * drink);
    }
}