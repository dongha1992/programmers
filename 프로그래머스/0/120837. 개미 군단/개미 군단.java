class Solution {
    public enum Ant {
        GENERAL(5),
        SOLIDER(3),
        WORKER(1);

        private final int attack;

        Ant(int attack) {
            this.attack = attack;
        }

        public static int[] getAmountAndLeft(int hp, Ant ant) {
            int need = hp / ant.attack;
            int left = hp % ant.attack;
            return new int[]{need, left};
        }

    }

    public static int calculateAmountOfAnts(int hp) {
        int result = 0;
        int[] generalResult = Ant.getAmountAndLeft(hp, Ant.GENERAL);
        result += generalResult[0];
        hp = generalResult[1];

        int[] soliderResult = Ant.getAmountAndLeft(hp, Ant.SOLIDER);
        result += soliderResult[0];
        hp = soliderResult[1];

        int[] workerResult = Ant.getAmountAndLeft(hp, Ant.WORKER);
        result += workerResult[0];

        return result;
    }

    public int solution(int hp) {
        int answer = calculateAmountOfAnts(hp);
        return answer;
    }
}