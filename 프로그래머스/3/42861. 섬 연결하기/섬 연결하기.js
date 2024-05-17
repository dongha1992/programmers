function solution(n, costs) {
  const unionFind = new UnionFind(n);
  costs.sort((a, b) => a[2] - b[2]); 
  let answer = 0;
  
  for(const [u, v, w] of costs){
    if(unionFind.union(u, v)){
      answer += w

    }
  }
  return answer
}


class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill(-1);
    }

    find(x) {
        if (this.parent[x] < 0) return x;
        return this.parent[x] = this.find(this.parent[x]);
    }

    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if (rootX === rootY) return false;

        if (this.parent[rootX] > this.parent[rootY]) {
            [rootX, rootY] = [rootY, rootX];
        }

        this.parent[rootX] += this.parent[rootY];
        this.parent[rootY] = rootX;

        return true;
    }
}