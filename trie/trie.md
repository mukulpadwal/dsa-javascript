# Trie Data Structure
======================

A Trie is a data structure that stores a collection of strings in a way that allows for efficient retrieval of strings that match a given prefix. It is also known as a "prefix tree" because it is a tree-like data structure where each node is associated with a string.

## Methods

### 1. `insert(word)`

Inserts a word into the Trie.

#### Parameters

* `word`: The word to insert into the Trie.

#### Returns

* `undefined`

### 2. `contains(word)`

Checks if a word is present in the Trie.

#### Parameters

* `word`: The word to check for in the Trie.

#### Returns

* `boolean`: True if the word is present, false otherwise.

### 3. `startsWith(prefix)`

Checks if a prefix is present in the Trie.

#### Parameters

* `prefix`: The prefix to check for in the Trie.

#### Returns

* `boolean`: True if the prefix is present, false otherwise.

### 4. `getWordsWithPrefix(prefix)`

Returns all words in the Trie that start with a given prefix.

#### Parameters

* `prefix`: The prefix to search for in the Trie.

#### Returns

* `Array<string>`: An array of all words in the Trie that start with the given prefix.

## Example Usage

### 5. `removeWord(word)`

Removes a word from the Trie if it exists.

#### Parameters

* `word`: The word to be removed from the Trie.

#### Returns

* `undefined`

#### Reference

The `removeWord` method is implemented in the `trie.js` file as follows:

```javascript
removeWord(word) {
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
```



