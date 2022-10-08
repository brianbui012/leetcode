// Sliding Window exponential

// QUESTION 1:
// You are given an array A of N integers and a value K. Also, there are two types of values - value of an array and value of a subarray.
// The values are defined as follows:

// The value of array is defined as the maximum value of all possible subarrays of size K
// The value of subarray is defined as the sum of all the the distinct numbers raised to the power of frequency of that number in the subarray, taking modulo 10^9+7
// Determine the maximum value of the array.

// EXAMPLE:
// Input
// k = 3
// N = 5
// A = [2,1,2,3,3]

// Output
// 11

// Approach

// For subarray [2,1,2], we have two occurances of 2 and one occurance of 1.
// So, subarray value is 2^2+1^1 = 4 + 1 = 5
// For subarray [1,2,3], we have one occurance of 1, 2 and 3.
// So, subarray value is 1^1+2^1+3^1 = 1 + 2 + 3 = 6
// For subarray [2,3,3], we have two occurances of 3 and one occurance of 2.
// So, subarray value is 3^2+2^1 = 9 + 2 = 11
// CONSTRAINTS:
// 1<=N<=10^5
// 1<=K<=N
// 1<=A[i]<=10^6
// MOD = 10^9+7