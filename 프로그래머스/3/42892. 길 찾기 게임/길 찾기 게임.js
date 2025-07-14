function solution(nodeinfo) {
    let answer = [[]];
    const nodes = nodeinfo.map(([x, y], idx) => ({ x, y, idx: idx + 1 }));
    nodes.sort((a, b) => b.y - a.y);
    
    const bst = new BinaryTree()
    
    for(let i = 0; i < nodes.length; i++) {
        bst.insert(nodes[i])
    }
    
    const preOrder = []
    const postOrder = []
    bst.preOrder(bst.root, preOrder)
    bst.postOrder(bst.root, postOrder)
    
    return [preOrder, postOrder]
}

class Node {
    constructor(node) {
        this.x = node.x;
        this.y = node.y;
        this.idx = node.idx;
        this.left = null;
        this.right = null
        this.parent = null
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }
    
    isEmpty() {
        return this.root === null
    }
    
    insert(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.root = node
        } else {
            this.insertNode(this.root, node)
        }
    }
    
    insertNode(root, node) {
        if(node.x < root.x) {
            if(!root.left){
                node.parent = root
                root.left = node
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if(!root.right) {
                node.parent = root
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    
    preOrder(root, path) {
         if(root) {
             path.push(root.idx)
             this.preOrder(root.left, path)
             this.preOrder(root.right, path) 
         }
    }
    
    postOrder(root, path) {
         if(root) {
             this.postOrder(root.left, path)
             this.postOrder(root.right, path) 
             path.push(root.idx)
         }
    }
}

