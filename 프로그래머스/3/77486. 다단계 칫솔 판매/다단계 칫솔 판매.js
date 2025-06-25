function solution(enroll, referral, seller, amount) {
  const myTree = new Tree();

  for (let i = 0; i < enroll.length; i++) {
    myTree.insert(enroll[i], referral[i], 0);
  }

  for (let i = 0; i < seller.length; i++) {
    myTree.traverseUp(seller[i], amount[i]);
  }

  return myTree.search(enroll);
}

class Node {
  constructor(name, parent, amount = 0) {
    this.name = name;
    this.amount = amount || 0;
    this.parent = parent || null;
    this.profit = 0;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = new Node('-', 0, 0);
    this.map = new Map();
  }

  insert(name, parent, amount) {
    const node = new Node(name, parent, amount);
    this.map.set(name, node);

    if (parent === '-') {
      this.root.children.push(node);
      node.parent = this.root;
    } else {
      const foundParent = this.map.get(parent);
      if (!foundParent) throw new Error('부모를 못 찾음');
      foundParent.children.push(node);
      node.parent = foundParent;
    }
  }

  traverseUp(name, amount) {
    let node = this.map.get(name);
    if (!node) return;
    let profit = amount * 100;

    node.amount = amount;

    while (node.parent) {
      const give = Math.floor(profit * 0.1);
      const keep = profit - give;

      node.profit += keep;
      node = node.parent;
      profit = give;
    }
  }

  find(root, name) {
    if (!root) return null;
    if (root.name === name) return root;

    for (const child of root.children) {
      const result = this.find(child, name);
      if (result) return result;
    }

    return null;
  }

  peek() {
    return this.root;
  }

  search(enroll) {
    return enroll.map((name) => this.map.get(name).profit);
  }
}

