
// TASK 1


function dot_product(v1, v2) {
    
    if (v1.length !== v2.length) {
        throw new Error("Vectors must have the same length.");
    }

    let dp = 0;
    for (let i = 0; i < v1.length; i++) {
        dp += v1[i] * v2[i];
    }

    return dp;
}

let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let ps = dot_product(v1, v2);
if (ps==0) {
    console.log("this table are orthogonal ")
}
console.log(ps); // Output: 32



// TASK 2

let arr = [5, 2, 4, 6, 1, 3];
insertionSort(arr);


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(arr); // Output: [1, 2, 3, 4, 5, 6]

