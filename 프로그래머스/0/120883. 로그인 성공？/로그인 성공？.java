class Solution {
    public enum LoginResult {
        LOGIN("login"),
        WRONG_PW("wrong pw"),
        FAIL("fail");

        private final String message;

        LoginResult(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }
    
    
    public String solution(String[] id_pw, String[][] db) {
        String answer = "";
        for(String[] idpw : db){
           LoginResult result = checkCredentials(id_pw, idpw);
           if(result != LoginResult.FAIL) return result.getMessage();
        }
        return LoginResult.FAIL.getMessage();
    }
    
    private LoginResult checkCredentials(String[] id_pw, String[] idpw){
        if(id_pw[0].equals(idpw[0])) return id_pw[1].equals(idpw[1]) ? LoginResult.LOGIN : LoginResult.WRONG_PW;
        else return LoginResult.FAIL;
    }
}