import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int[] nums) {
        Set<Integer> poketmons = new HashSet<>();
        for(int p : nums) {
            poketmons.add(p);
        }
        
        int limit = nums.length / 2;

        return Math.min(limit, poketmons.size());
    }
}