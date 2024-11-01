class TrieNode {
  /**
   * Initializes a new Trie Node with an empty children object and a boolean isEndOfWord that is set to false.
   */
  constructor() {
    this.children = new Map();
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

      if (!currNode.children.has(char)) {
        currNode.children.set(char, new TrieNode());
      }

      currNode = currNode.children.get(char);
    }

    currNode.isEndOfWord = true;
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

      if (!currNode.children.has(char)) {
        return false;
      }

      currNode = currNode.children.get(char);
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

      if (!currNode.children.has(char)) {
        return false;
      }

      currNode = currNode.children.get(char);
    }

    return true;
  }

  /**
   * Removes a word from the Trie, if present. This function uses a recursive
   * helper function to traverse the Trie and remove nodes that are no longer 
   * part of any word.
   *
   * @param {string} word - The word to be removed from the Trie.
   *
   * The function marks the end of the word as false if the word is found. 
   * It also checks if nodes can be deleted by confirming they have no children 
   * and are not the end of another word. The process starts from the root node 
   * and continues until the entire word is processed or determined to not exist 
   * in the Trie.
   */
  removeWord(word) {
    /**
     * A recursive helper function to delete a word from the Trie.
     * @param {TrieNode} node The current node in the Trie.
     * @param {string} word The word to be deleted from the Trie.
     * @param {number} index The current index of the word being processed.
     * @returns {boolean} True if the node should be deleted, false otherwise.
     */
    const deleteRecursively = (node, word, index) => {
      // Base case: If we reach the end of the word
      if (index === word.length) {
        // If the word is found, mark the end of the word as false
        if (!node.isEndOfWord) {
          return false; // Word doesn't exist
        }

        node.isEndOfWord = false; // Unmark the end of the word

        // Return true if the node has no children (can be deleted)
        return node.children.size === 0;
      }

      // Get the character at the current index
      const char = word[index];
      const childNode = node.children.get(char);

      if (!childNode) {
        return false; // Word doesn't exist
      }

      // Recursively delete for the child node
      const shouldDeleteChild = deleteRecursively(childNode, word, index + 1);

      // If true is returned, delete the mapping for the character
      if (shouldDeleteChild) {
        node.children.delete(char);
        // Return true if the current node should also be deleted
        return node.children.size === 0 && !node.isEndOfWord;
      }

      return false; // Don't delete this node
    };

    deleteRecursively(this.root, word, 0);
  }
}

/**
 * Examples
 */
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("banana");
trie.insert("orange");

console.log(trie.search("apple")); // true
console.log(trie.search("banana")); // true
console.log(trie.search("orange")); // true

console.log(trie.search("grape")); // false

console.log(trie.isPrefix("ap")); // true
console.log(trie.isPrefix("app")); // true
console.log(trie.isPrefix("ban")); // true

console.log(trie.isPrefix("grape")); // false

trie.removeWord("apple");
console.log(trie.search("apple")); // false
console.log(trie.search("app")); // true
