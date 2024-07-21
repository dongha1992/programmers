import java.util.HashMap;
import java.util.Map;


class Solution {
    public String solution(String[] participant, String[] completion) {
        Map<String, Integer> participantMap = new HashMap<>();
        
        for(String p : participant){
            if (participantMap.containsKey(p)) {
                participantMap.put(p, participantMap.get(p) + 1);
            } else {
                participantMap.put(p, 1);
            }
        }
        
        for(String c : completion){
            participantMap.put(c, participantMap.get(c)-1);
        }
        
        for (Map.Entry<String, Integer> entry : participantMap.entrySet()) {
          if(entry.getValue() > 0) return entry.getKey();
        }
        
        return "";
    }
}