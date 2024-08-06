class Solution {
    public int solution(int[][] sizes) {
        int answer = 0;
        int max = 0;
        int min = 0;
        
        for(int[] sizeArr : sizes){
            int width = sizeArr[0];
            int height = sizeArr[1];
            
            boolean isWideWidth = width > height;

            max = Math.max(max, isWideWidth ? width : height);
            min = Math.max(min, isWideWidth ? height : width);

        }
        
        return max * min;
    }
}