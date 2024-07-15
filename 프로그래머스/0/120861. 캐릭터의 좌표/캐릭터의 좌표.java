class Solution {  
    public enum Direction{
        UP("up", 0, 1),
        DOWN("down", 0, -1),
        RIGHT("right", 1, 0),
        LEFT("left", -1, 0);
        
        private final String direction;
        private final int x;
        private final int y;
        
        Direction(String direction, int x, int y){
            this.direction = direction;
            this.x = x;
            this.y = y;
        }
        
        public static Direction getDirection(String direction){
            for(Direction dir : Direction.values()){
                if(dir.direction.equalsIgnoreCase(direction)){
                    return dir;
                }
            }
            throw new IllegalArgumentException("없는 방향 " + direction);
        };
        
        public int getX(){
            return x;
        };
        
        public int getY(){
            return y;
        };
    }
    
    public int[] solution(String[] keyinput, int[] board) {
        int[] answer = {};
        int x = 0;
        int y = 0;
        int maxX = board[0] / 2;
        int maxY = board[1] / 2;
        
        for(String key : keyinput){
            Direction direction = Direction.getDirection(key);
            int nx = x + direction.getX();
            int ny = y + direction.getY();
            if(Math.abs(nx) <= maxX && Math.abs(ny) <= maxY){
                x = nx;
                y = ny;
            }
        }
        return new int[]{x, y};
    }
}