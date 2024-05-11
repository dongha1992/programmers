function solution(m, musicinfos) {
  m = m.replace(/(\D)#/g, (s, p1)=> p1.toLowerCase())
  let answer = []
  
  const getSubsStr = (str) => {
    let flag = false
    let max = ""
    let min = ""
    if(str.length >= m.length){
      max = str
      min = m
    } else {
      max = m
      min = str
    }
    for(let i = 0; i < max.length; i++){
      if(max[i]===min[0]){
        if(max.slice(i, min.length + i) === m){
          flag = true
        } 
      }
    }
    return flag
  }

  const getTime = (str1, str2) => {
    let start = str1.split(":")
    let end = str2.split(":")
    let hh = (+end[0] - +start[0]) * 60
    let mm = (+end[1] - +start[1])
    return hh + mm
  }
  
  musicinfos = musicinfos.map(v=>{
    const start = v.split(",")[0]
    const end = v.split(",")[1]
    const time = getTime(start, end)
    return [time, ...v.split(",")]
  })

  
  for(let i = 0; i < musicinfos.length; i++){
    const time = musicinfos[i][0]
    let melody = musicinfos[i][4].replace(/(\D)#/g, (s, p1)=> p1.toLowerCase())
    const title = musicinfos[i][3]

    if(time >= melody.length) {
      while(true){
      const diff = time - melody.length
      const share = Math.ceil(diff / m.length) + 1
      const rest =  diff % m.length   
          melody = melody.repeat(time / melody.length+1)
      break;
     }
    } else {
      melody = melody.slice(0, time)
    }
    if(getSubsStr(melody)) answer.push([time, i, title])
  } 
  
  if(answer.length==0) return "(None)"
  
  answer = answer.length === 1 ? answer.map(v=>v[2]) : answer.sort((a, b)=> {
    if(a[0] === b[0]){
     return a[1] - b[1]
    } else {
     return b[0] - a[0]
    }
  }).map(v => v[2])

  return answer[0]
}