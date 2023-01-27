function solution(new_id) {
return dotCheck(lengthCheck(emptyCheck(dotCheck(cutDot(toReplace(toLower(new_id)))))))
}


const lengthCheck = (str) => {
  if(str.length >= 15){
    return str.slice(0,15)
  } else if(str.length > 0 && str.length <= 2){
    if(str.length===2){
       return str+str[str.length-1]
    } else {
       return str+str[0]+str[0]
    }
  }
  return str
}


const toReplace = (str) => {
  let reg = /[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim;
  return str.replace(reg,"")
}

const toLower = (str) => {
  return str.toLowerCase()
}

const cutDot = (str) => {
  let flag = false
  let results = ""
  for(let i = 0; i < str.length; i++){
    if(str[i]==="." && str[i+1]==="."){
      flag = true
    } else {
      flag= false
    }
    if(!flag) results += str[i]
  }
  return results
}

const dotCheck = (str)=>{
  let results = str
  if(str&&str[0]==="."){
    results = results.slice(1)
  }
  if(str&&str[str.length-1]==="."){
    results =results.slice(0,-1)
  }
  return results
}

const emptyCheck = (str) => {
  if(str.length===0) {
    return "a"
  } else return str
} 