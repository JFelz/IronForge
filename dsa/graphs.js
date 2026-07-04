// ─── Graphs ───────────────────────────────────────────────────────────────────

// Challenge 1: Number of Islands
// Given a 2D grid of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and formed by connecting adjacent (4-directional) land.
// Example: numIslands([["1","1","0"],["0","1","0"],["0","0","1"]]) => 2
function numIslands(grid) {}

// Challenge 2: Clone Graph
// Given a reference to a node in a connected undirected graph, return a deep copy.
class GraphNode {
  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}
function cloneGraph(node) {}

// Challenge 3: Course Schedule (Cycle Detection)
// There are numCourses courses (0 to numCourses-1). prerequisites[i] = [a, b] means
// you must take b before a. Return true if all courses can be finished.
// Example: canFinish(2, [[1,0]]) => true  |  canFinish(2, [[1,0],[0,1]]) => false
function canFinish(numCourses, prerequisites) {}

// Challenge 4: Shortest Path in Binary Matrix
// In an n×n binary matrix, find the shortest clear path from top-left to bottom-right.
// A clear path visits only 0-cells and moves in 8 directions. Return length or -1.
// Example: shortestPathBinaryMatrix([[0,1],[1,0]]) => 2
function shortestPathBinaryMatrix(grid) {}

// Challenge 5: Pacific Atlantic Water Flow
// Given an m×n island grid with heights, water flows to a neighbor if height <=current.
// Return all coordinates where water can flow to both the Pacific (top/left) and
// Atlantic (bottom/right) oceans.
// Example: pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])
//          => [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
function pacificAtlantic(heights) {}

module.exports = { numIslands, GraphNode, cloneGraph, canFinish, shortestPathBinaryMatrix, pacificAtlantic };
