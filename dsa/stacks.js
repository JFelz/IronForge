// ─── Stacks ───────────────────────────────────────────────────────────────────

// Challenge 1: Valid Parentheses
// Given a string of brackets '(', ')', '{', '}', '[', ']', return true if valid.
// Valid means every open bracket is closed in the correct order.
// Example: isValid("()[]{}") => true  |  isValid("(]") => false
function isValid(s) {}

// Challenge 2: Min Stack
// Design a stack that supports push, pop, top, and getMin in O(1) time.
class MinStack {
  constructor() {}
  push(val) {}
  pop() {}
  top() {}
  getMin() {}
}

// Challenge 3: Evaluate Reverse Polish Notation
// Evaluate an expression in RPN (postfix) form. Operators are "+", "-", "*", "/".
// Division truncates toward zero.
// Example: evalRPN(["2","1","+","3","*"]) => 9
function evalRPN(tokens) {}

// Challenge 4: Daily Temperatures
// Given an array `temperatures`, return an array where result[i] is the number of days
// until a warmer temperature. If no warmer day exists, result[i] = 0.
// Example: dailyTemperatures([73,74,75,71,69,72,76,73]) => [1,1,4,2,1,1,0,0]
function dailyTemperatures(temperatures) {}

// Challenge 5: Largest Rectangle in Histogram
// Given an array of bar heights, find the area of the largest rectangle in the histogram.
// Example: largestRectangleArea([2,1,5,6,2,3]) => 10
function largestRectangleArea(heights) {}

module.exports = { isValid, MinStack, evalRPN, dailyTemperatures, largestRectangleArea };
