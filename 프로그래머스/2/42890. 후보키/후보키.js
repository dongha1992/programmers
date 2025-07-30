const solution = (relation) => {
  const row = relation.length;
  const col = relation[0].length;

  const arr = Array(col).fill(null).map((_, i) => i)

  const combination = getCombinations(arr).sort((a, b) => a.length- b.length)
  const candidates = []

  // 유일성
  for(let i = 0; i < combination.length; i++) {
    const combi = combination[i]
    const keySet = new Set();
    const uniqueCandidate = Array(row).fill(null).map((_, i) => [])

    for(let j = 0; j < combi.length; j++) {
      const col = combi[j]

      for(let k = 0; k < row; k++) {
        const item = relation[k][col]
        uniqueCandidate[k].push(item)
      }
    }

    const uniqueCandidateKey = uniqueCandidate.map(uc => uc.join("-"))
    uniqueCandidateKey.forEach(ucd => keySet.add(ucd))

    if(keySet.size === row) {
      candidates.push(combi)
    }
  }

  // 최소성
  const minimality = []
  for(let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i]
    let isMinimality = true

    for (let j = 0; j < minimality.length; j++) {
        const minimal = minimality[j]

        if (minimal.every(col => candidate.includes(col))) {
          isMinimality = false
          break
        }
      }

    if(isMinimality) minimality.push(candidate)
  }

  return minimality.length
}

function getCombinations (arr) {
  const result = []

  const dfs = (start, path) => {
    if(path.length > 0) {
      result.push(path)
    }

    for(let i = start; i < arr.length; i++) {
      dfs(i+1, [...path, arr[i]])
    }
  }

  dfs(0, [])

  return result
}

