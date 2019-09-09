// Please write a function which given an input of an integer N
// returns an array containing N fibonacci numbers.
// Assume that the input is always an integer and never less than 2.
//
// Examples:
// 2 => [0,1]
// 3 => [0,1,1]
// 8 => [0,1,1,2,3,5,8,13]

// linear Solution

function fb(n) {
  //[0,1, 1, 2, 3, 5, 8]

  let nums = [0, 1];

  for (let i = 2; i < n; i++) {
    nums.push(nums[i - 2] + nums[i - 1]);
  }
  console.log(nums);
  return nums[n - 1];
}
//recursion would turn it expoential  and could take longer to execute
