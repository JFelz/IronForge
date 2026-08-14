// ─── Greedy ─────────────────────────────────────────────────────────────────

// Challenge 1: Jump Game
// Given an array where each element represents the max jump length at that
// position, determine if you can reach the last index starting from index 0.
// Example: canJump([2,3,1,1,4]) => true
function canJump(nums) {}

// Challenge 2: Jump Game II
// Given the same setup as Jump Game, return the minimum number of jumps
// needed to reach the last index.
// Example: jump([2,3,1,1,4]) => 2
function jump(nums) {}

// Challenge 3: Gas Station
// Given gas[i] and cost[i] for n gas stations in a circle, return the
// starting station index that lets you complete the circuit, or -1.
// Example: canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) => 3
function canCompleteCircuit(gas, cost) {}

// Challenge 4: Merge Intervals
// Given an array of intervals, merge all overlapping intervals.
// Example: merge([[1,3],[2,6],[8,10],[15,18]]) => [[1,6],[8,10],[15,18]]
function merge(intervals) {}

// Challenge 5: Non-overlapping Intervals
// Given an array of intervals, find the minimum number of intervals to
// remove so the rest are non-overlapping.
// Example: eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]) => 1
function eraseOverlapIntervals(intervals) {}

// Challenge 6: Partition Labels
// Partition a string into as many parts as possible so each letter appears
// in at most one part; return the sizes of the parts.
// Example: partitionLabels("ababcbacadefegdehijhklij") => [9,7,8]
function partitionLabels(s) {}

// Challenge 7: Candy
// Children stand in a line, each with a rating. Give each child at least
// one candy such that children with higher ratings than neighbors get more
// candy. Return the minimum total candies needed.
// Example: candy([1,0,2]) => 5
function candy(ratings) {}

// Challenge 8: Minimum Number of Arrows to Burst Balloons
// Given balloon start/end points on a line, find the minimum number of
// arrows (vertical shots) needed to burst all balloons.
// Example: findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]) => 2
function findMinArrowShots(points) {}

// Challenge 9: Queue Reconstruction by Height
// Given people described by [height, k] (k = number of people in front
// with height >= this person's height), reconstruct the queue.
// Example: reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])
//          => [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
function reconstructQueue(people) {}

// Challenge 10: Assign Cookies
// Given greed factors of children and sizes of cookies, maximize the
// number of content children (a child is content if given a cookie >=
// their greed factor).
// Example: findContentChildren([1,2,3], [1,1]) => 1
function findContentChildren(g, s) {}

module.exports = {
  canJump,
  jump,
  canCompleteCircuit,
  merge,
  eraseOverlapIntervals,
  partitionLabels,
  candy,
  findMinArrowShots,
  reconstructQueue,
  findContentChildren,
};
