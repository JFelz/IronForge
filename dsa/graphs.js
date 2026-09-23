// ─── Graphs ─────────────────────────────────────────────────────────────────

// Challenge 1: Number of Islands
// Given a 2D grid of '1's (land) and '0's (water), return the number of
// islands (connected land masses).
// Example: numIslands([["1","1","0"],["1","0","0"],["0","0","1"]]) => 2
function numIslands(grid) {}

// Challenge 2: Clone Graph
// Given a reference to a node in a connected undirected graph, return a deep
// copy (clone) of the graph.
function cloneGraph(node) {}

// Challenge 3: Course Schedule
// Given numCourses and a list of prerequisite pairs, determine if it's
// possible to finish all courses (i.e. the prerequisite graph has no cycle).
// Example: canFinish(2, [[1,0]]) => true
function canFinish(numCourses, prerequisites) {}

// Challenge 4: Pacific Atlantic Water Flow
// Given an m x n matrix of heights, return the list of coordinates from
// which water can flow to both the Pacific and Atlantic oceans.
function pacificAtlantic(heights) {}

// Challenge 5: Network Delay Time
// Given a network of n nodes and travel times as directed edges, return the
// time it takes for a signal to reach all nodes from node k, or -1 if
// impossible.
// Example: networkDelayTime([[2,1,1],[2,3,1],[3,4,1]], 4, 2) => 2
function networkDelayTime(times, n, k) {}

module.exports = {
  numIslands,
  cloneGraph,
  canFinish,
  pacificAtlantic,
  networkDelayTime,
};
