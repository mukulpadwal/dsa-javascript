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
