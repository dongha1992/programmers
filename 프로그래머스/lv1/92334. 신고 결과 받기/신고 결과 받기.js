function solution(id_list, report, k) {

  let idMap = id_list.map(id => [id, 0])
  const filteredReport = [...new Set(report)].map(a => a.split(" "))
  const answer = Object.fromEntries(idMap)
  
  for(let i = 0; i < idMap.length; i++){
    const user_id = idMap[i][0]
    
    for(let j =0; j < filteredReport.length; j++){
      const reported_user = filteredReport[j][1]
      if(user_id === reported_user){
        idMap[i][1]++
      }
    }
    
    if(idMap[i][1] >= k){
      for(let l =0; l <filteredReport.length; l++){
        const user_report = filteredReport[l][0]
        const reported_user = filteredReport[l][1]
        // 신고로 걸린 애들 user_id
        // 신고 걸린 애들을 신고한 애들 user_report
        if(reported_user === user_id){
          if(answer[user_report]){ 
            answer[user_report]++
          } else {
            answer[user_report] = 1
          }
        }
      }
    }   
  }
  return Object.values(answer)
}