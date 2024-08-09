import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Collections;

class Solution {
    public int solution(int k, int m, int[] score) {
        ScoreCalculator scoreCalculator = new ScoreCalculator(k, m, score);
        return scoreCalculator.calculateTotalScore();
    }
}

class Scores {
    private Integer[] scores;
    
    public Scores(Integer[] scores){
        this.scores = scores;
    }
    
    public int getMinScore(){
        return scores[scores.length - 1];
    }
    
    public int calculateGroupScore(int m){
        return getMinScore() * m;
    }
}

class ScoreCalculator {
    private int k;
    private int m;
    private Integer[] sortedScores;
    
    public ScoreCalculator(int k, int m, int[] score) {
        this.k = k;
        this.m = m;
        this.sortedScores = new ScoreArray(score).getSortedDescending();
    }
    
    public int calculateTotalScore() {
        int totalScore = 0;
        
        for (int i = 0; i < sortedScores.length; i += m) {
            if (i + m > sortedScores.length) break;
            
            Integer[] subArr = Arrays.copyOfRange(sortedScores, i, i + m);
            Scores group = new Scores(subArr);
            totalScore += group.calculateGroupScore(m);
        }
        return totalScore;
    }
}

class ScoreArray { 
    private int[] score;
    
    public ScoreArray(int[] score) {
        this.score = score;
    }
    
    public Integer[] toIntegerArray() {
        Integer[] integerArray = new Integer[score.length];
        
        for (int i = 0; i < score.length; i++) {
            integerArray[i] = score[i];
        }
        
        return integerArray;
    }
    
    public Integer[] getSortedDescending(){
        Integer[] sortedScores = toIntegerArray();
        Arrays.sort(sortedScores, Collections.reverseOrder());
        return sortedScores;
    }

}