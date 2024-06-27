import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, boolean[] flag) {
        ArrayProcessor processor = new ArrayProcessor();
        processor.process(arr, flag);
        return processor.getResult();
    }
}

class ArrayProcessor {
    ArrayList<Integer> list;
    
    public ArrayProcessor() {
        this.list = new ArrayList<>();
    }
    
    public void process(int[] arr, boolean[] flag){
        for (int i = 0; i < flag.length; i++) {
            if (flag[i]) addElements(arr[i]);
            else removeElements(arr[i]);
        }
    }
    
    private void addElements(int val) {
        for (int j = 0; j < val * 2; j++) {
            list.add(val);
        }
    }
    
    private void removeElements(int val) { 
       for (int j = 0; j < val; j++) {
            if (!list.isEmpty()) list.remove(list.size() - 1);
        }
    }
    
    public int[] getResult() {
        int[] answer = new int[list.size()];
        for(int i = 0; i < list.size(); i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
    
}