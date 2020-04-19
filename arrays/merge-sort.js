// Reference - https://codepen.io/btholt/pen/rOEdKK?editors=0010

const mergeSort = nums => {
    if (nums.length < 2) {
      return nums;
    }
    const length = nums.length;
    const middle = Math.floor(length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
};
  
const merge = (left, right) => {    
    const results = [];

    while (left.length && right.length) {  
      if (left[0] <= right[0]) {
        results.push(left.shift());
      }
      else {
        results.push(right.shift());
      }
    }
    return results.concat(left, right);
};
console.log(mergeSort([1, 3, 5, 6, 6, 3, 2, 1]))