// ─── Tries ──────────────────────────────────────────────────────────────────

// Challenge 1: Implement Trie (Prefix Tree)
// Implement a trie with insert, search, and startsWith methods.
class Trie {
  constructor() {}
  insert(word) {}
  search(word) {}
  startsWith(prefix) {}
}

// Challenge 2: Design Add and Search Words Data Structure
// Design a data structure that supports adding words and searching for a
// word where '.' can match any letter.
class WordDictionary {
  constructor() {}
  addWord(word) {}
  search(word) {}
}

// Challenge 3: Word Search II
// Given a board of characters and a list of words, return all words that
// can be found by tracing sequential adjacent letters, using a trie.
// Example: findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]],
//          ["oath","pea","eat","rain"]) => ["eat","oath"]
function findWords(board, words) {}

// Challenge 4: Replace Words
// Given a dictionary of roots and a sentence, replace all words in the
// sentence with the shortest root that forms it, using a trie.
// Example: replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")
//          => "the cat was rat by the bat"
function replaceWords(dictionary, sentence) {}

// Challenge 5: Longest Word in Dictionary
// Given an array of strings, find the longest word that can be built one
// character at a time by other words in the array.
// Example: longestWord(["w","wo","wor","worl","world"]) => "world"
function longestWord(words) {}

// Challenge 6: Maximum XOR of Two Numbers in an Array
// Given an integer array, find the maximum result of nums[i] XOR nums[j]
// using a binary trie.
// Example: findMaximumXOR([3,10,5,25,2,8]) => 28
function findMaximumXOR(nums) {}

// Challenge 7: Palindrome Pairs
// Given a list of unique words, return all pairs of indices (i, j) such
// that concatenating words[i] + words[j] forms a palindrome.
// Example: palindromePairs(["abcd","dcba","lls","s","sssll"])
//          => [[0,1],[1,0],[3,2],[2,4]]
function palindromePairs(words) {}

// Challenge 8: Stream of Characters
// Design an algorithm that accepts a stream of characters and checks
// whether a suffix of these characters matches a given word from a list.
class StreamChecker {
  constructor(words) {}
  query(letter) {}
}

// Challenge 9: Search Suggestions System
// Given a list of products and a search word, return suggested products
// (up to 3, sorted lexicographically) after each character of the search
// word is typed.
// Example: suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse")
//          => [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],
//              ["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
function suggestedProducts(products, searchWord) {}

// Challenge 10: Concatenated Words
// Given a list of words, return all words that are a concatenation of at
// least two shorter words from the same list, using a trie or word set.
// Example: findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"])
//          => ["catsdogcats","dogcatsdog","ratcatdogcat"]
function findAllConcatenatedWordsInADict(words) {}

module.exports = {
  Trie,
  WordDictionary,
  findWords,
  replaceWords,
  longestWord,
  findMaximumXOR,
  palindromePairs,
  StreamChecker,
  suggestedProducts,
  findAllConcatenatedWordsInADict,
};
