function solution(today, terms, privacies) {

  const YEAR_TO_MONTH = 12
  const MONTH_TO_DAY = 28
  let answer = []
  const termsMap = Object.fromEntries(terms.map(v => v.split(" ")))
  const arr = privacies.map(v => {
    return v.split(" ") 
  })
  
  const getTimeDiff = (compare) => {
    const [year, month, day] = compare.split(".")
    const yearDiff = (yyyy - year) * YEAR_TO_MONTH * MONTH_TO_DAY
    const monthDiff = (mm - month) * MONTH_TO_DAY
    const dayDiff = (dd - day)

    return yearDiff + monthDiff + dayDiff
}

  
  const [yyyy, mm, dd] = today.split(".")
  
  for(let i = 0; i < arr.length; i++){
    const [targetDate, type] = arr[i]
    
      if(termsMap[type]){
        const diff = getTimeDiff(targetDate)
        if(termsMap[type] * MONTH_TO_DAY <= diff) answer.push(i+1)
    }
  }
  
  
  return answer
}
