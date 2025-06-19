
function solution(n, w, num) {
const parcelMap = new Map();
  const lastNumber = n;

  const h = Math.ceil(lastNumber / w);
  const isEven = (rowIndex) => rowIndex % 2 === 0;

  const parcels = Array.from({ length: h }, () =>
    Array.from({ length: w }).fill(0)
  );
  
  let current = 1;
  
  for (let rowIndex = 0; rowIndex < h; rowIndex++) {
    const leftToRight = isEven(h) ? isEven(rowIndex) : !isEven(rowIndex);
    
     const cols = leftToRight
      ?  Array.from({ length: w }, (_, i) => w - 1 - i)
      :  Array.from({ length: w }, (_, i) => i)
    
    
    for(let colIndex of cols) {
      if(current > n) break;
      parcels[rowIndex][colIndex] = current
      parcelMap.set(current, [rowIndex, colIndex]);
      current++;
    }
  }

  const [targetRow, targetCol] = parcelMap.get(num);
  let count = 0
    for (let row = h - 1; row >= 0; row--) {
    if (parcels[row][targetCol] === 0) continue;
    count++;
    if (parcels[row][targetCol] === num) break;
  }
  
  return count;
}