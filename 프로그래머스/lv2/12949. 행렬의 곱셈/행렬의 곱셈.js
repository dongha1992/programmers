function solution(arr1, arr2) {
   
            let result = []
    for(let i = 0; i < arr1.length; i++){
        let row = []
        for(let j = 0; j < arr2[0].length; j++){
            let value = 0;
            for(let k = 0; k < arr2.length; k++){
                value += arr1[i][k] * arr2[k][j]
            }
            row.push(value)
        }
        result.push(row)
    }
    return result
}