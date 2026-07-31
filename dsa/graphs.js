// ─── Graphs ───────────────────────────────────────────────────────────────────

// Challenge 1: Number of Islands
// Given an m×n grid of '1's (land) and '0's (water), return the number of
// islands. An island is surrounded by water and formed by connecting
// adjacent lands horizontally or vertically.
// Example: numIslands([["1","1","0"],["1","0","0"],["0","0","1"]]) => 2
function numIslands(grid) {}

// Challenge 2: Clone Graph
// Given a reference to a node in a connected undirected graph, return a
// deep copy (clone) of the graph.
function cloneGraph(node) {}

// Challenge 3: Course Schedule
// There are numCourses courses labeled 0..numCourses-1. Given prerequisite
// pairs [a,b] meaning you must take b before a, return true if you can
// finish all courses (i.e., no cycle).
// Example: canFinish(2, [[1,0]]) => true
function canFinish(numCourses, prerequisites) {}

// Challenge 4: Shortest Path in Binary Matrix
// Given an n×n binary grid, return the length of the shortest clear path
// from top-left to bottom-right, moving in any of 8 directions through
// cells with value 0. Return -1 if no such path exists.
// Example: shortestPathBinaryMatrix([[0,1],[1,0]]) => 2
function shortestPathBinaryMatrix(grid) {}

// Challenge 5: Pacific Atlantic Water Flow
// Given an m×n grid of heights, return the coordinates where rainwater can
// flow to both the Pacific (top/left edges) and Atlantic (bottom/right
// edges) oceans. Water flows from a cell to an adjacent cell with height
// less than or equal to it.
// Example: pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])
//          => [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
function pacificAtlantic(heights) {}

// Challenge 6: Course Schedule II
// Same setup as Course Schedule, but return a valid order in which to take
// all courses. Return an empty array if it's impossible.
// Example: findOrder(4, [[1,0],[2,0],[3,1],[3,2]]) => [0,1,2,3]  (one valid order)
function findOrder(numCourses, prerequisites) {}

// Challenge 7: Word Ladder
// Given beginWord, endWord, and a word list, return the length of the
// shortest transformation sequence from beginWord to endWord, changing
// only one letter at a time, where each intermediate word must be in the
// word list. Return 0 if no such sequence exists.
// Example: ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]) => 5
function ladderLength(beginWord, endWord, wordList) {}

// Challenge 8: Network Delay Time
// You are given times[i] = [u, v, w] meaning a signal from node u to node v
// takes w time. Given n nodes and a starting node k, return the time for
// all n nodes to receive the signal, or -1 if impossible.
// Example: networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) => 2
function networkDelayTime(times, n, k) {}

// Challenge 9: Is Graph Bipartite?
// Given an undirected graph as an adjacency list, return true if the nodes
// can be colored with two colors so no edge connects same-colored nodes.
// Example: isBipartite([[1,3],[0,2],[1,3],[0,2]]) => true
function isBipartite(graph) {}

// Challenge 10: Cheapest Flights Within K Stops
// Given n cities connected by flights [from, to, price], find the cheapest
// price from src to dst with at most k stops. Return -1 if no such route.
// Example: findCheapestPrice(4, [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], 0, 3, 1) => 700
function findCheapestPrice(n, flights, src, dst, k) {}

module.exports = {
  numIslands,
  cloneGraph,
  canFinish,
  shortestPathBinaryMatrix,
  pacificAtlantic,
  findOrder,
  ladderLength,
  networkDelayTime,
  isBipartite,
  findCheapestPrice,
};
