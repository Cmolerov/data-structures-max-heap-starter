// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.
var findKthLargest = function(nums, k) {
    let sorted = nums.sort((a, b) => (a - b));
    return sorted [nums.length - k];
   // let heap = new MaxHeap();
   //  nums.forEach(num => heap.insert(num));
   //   for (let i = 1; i < k; i++) heap.deleteMax();
   //   return heap.deleteMax();

};
