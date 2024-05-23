class Node {
  constructor(name, parent, profit) {
    this.name = name;
    this.parent = parent ?? null;
    this.profit = profit ?? 0;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = new Node('-', null, 0);
    this.nodeMap = new Map()
  }

  insert(enroll, referral, seller, amount) {
    this.nodeMap.set("-", this.root)
    
    for (let i = 0; i < enroll.length; i++) {
      const name = enroll[i];
      const node = new Node(name, referral[i], 0);
      this.nodeMap.set(name, node)
    }

    for (let i = 0; i < referral.length; i++) {
      const parentName = referral[i];
      const childNode = this.nodeMap.get(enroll[i])
      const parentNode = this.nodeMap.get(parentName)

      if (parentNode && childNode) {
        parentNode.children.push(childNode);
        childNode.parent = parentNode;
      }
    }
  }

  findNode(nodeName) {
    if (!this.nodeMap.get(nodeName)) return;
    return this.nodeMap.get(nodeName)
  }

  traverseUp(nodeName, profit, sum) {
    const node = this.findNode(nodeName);
    if (!node) return sum
    if (node.parent || nodeName === "-") {
      const left =  Math.floor(profit * 0.1)
      let newProfit = profit - left
      node.profit += newProfit
      if(left) this.traverseUp(node.parent?.name, left, newProfit);
    } else {
      return sum
      console.log('더 이상 부모 노드가 없습니다.');
    }
  }
  
  getProfit(nodeName){
    const node = this.findNode(nodeName);
    if (!node) return 0
    return node.profit
  }
}

function solution(enroll, referral, seller, amount) {
  const tree = new Tree();
  const answer = []
  tree.insert(enroll, referral, seller, amount);
  
  for(let i = 0; i < seller.length; i++){
    const s = seller[i]
    const p = amount[i] * 100
    tree.traverseUp(s, p, 0)
  }
  
 
  for(let i = 0; i < enroll.length; i++){
    const e = enroll[i]
    answer.push(tree.getProfit(e))
  }
  
  return answer;
}