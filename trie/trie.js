class TrieNode {
  /**
   * Initializes a new Trie Node with an empty children object and a boolean isEndOfWord that is set to false.
   */
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  /**
   * Initializes a new Trie with an empty root node.
   */
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the Trie.
   * @param {string} word the word to be inserted
   * @returns {void}
   */
  insert(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!currNode.children[char]) {
        currNode.children[char] = new TrieNode();
      }

      currNode = currNode.children[char];
    }
  }

  /**
   * Searches for a word in the Trie.
   * @param {string} word the word to be searched
   * @returns {boolean} true if the word is present, false otherwise
   */
  search(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!currNode.children[char]) {
        return false;
      }

      currNode = currNode.children[char];
    }

    return currNode.isEndOfWord;
  }

  /**
   * Checks if a given string is a prefix of any word in the Trie.
   * @param {string} word the string to be checked
   * @returns {boolean} true if the string is a prefix, false otherwise
   */
  isPrefix(word) {
    let currNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!currNode.children[char]) {
        return false;
      }

      currNode = currNode.children[char];
    }

    return true;
  }
}
