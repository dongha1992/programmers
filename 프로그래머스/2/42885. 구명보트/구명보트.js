function solution(people, limit) {  
  let lt = 0;
  let rt = people.length-1
  let answer = 0;
  people.sort((a, b) => a-b)
  while(lt <= rt){
    const low = people[lt]
    const high = people[rt]
    
    if(low+high <= limit){
      lt++
      rt--
      answer++
    } else {
      rt--
      answer++
    }
  }

  return answer
}