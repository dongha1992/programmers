function solution(words) {
  const trie = new Trie();
  let answer = 0;

  for (let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  for (let word of words) {
    answer += trie.getMinPrefixLength(word);
  }

  return answer;
}


class TrieNode {
  constructor() {
    this.children = Array(26);
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(key, value) {
    let node = this.root;
    for (let i = 0; i < key.length; i++) {
      const index = this.getIndex(key[i]);

      if (!node.children[index]) {
        const newNode = new TrieNode();
        node.children[index] = newNode;
      }
      node = node.children[index];
      node.count++;
    }
  }

  getMinPrefixLength(word) {
    let node = this.root;
    let length = 0;

    for (let ch of word) {
      const index = this.getIndex(ch)
      node = node.children[index];
      length++;

      if (node.count === 1) break;
    }

    return length;
  }
    
  getIndex(char) {
      return char.charCodeAt(0) - 97;
  }

}