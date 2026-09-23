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
// word, where the search word may contain '.' as a wildcard for any letter.
class WordDictionary {
  constructor() {}
  addWord(word) {}
  search(word) {}
}

// Challenge 3: Word Search II
// Given an m x n board of characters and a list of words, return all words
// that can be found on the board by tracing adjacent cells.
// Example: findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],
//          ["i","f","l","v"]], ["oath","pea","eat","rain"]) => ["oath","eat"]
function findWords(board, words) {}

// Challenge 4: Longest Word in Dictionary
// Given a list of words, return the longest word that can be built one
// character at a time by other words in the list.
// Example: longestWord(["w","wo","wor","worl","world"]) => "world"
function longestWord(words) {}

// Challenge 5: Replace Words
// Given a dictionary of roots and a sentence, replace all words in the
// sentence with the shortest matching root, if one exists.
// Example: replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")
//          => "the cat was rat by the bat"
function replaceWords(dictionary, sentence) {}

module.exports = {
  Trie,
  WordDictionary,
  findWords,
  longestWord,
  replaceWords,
};
