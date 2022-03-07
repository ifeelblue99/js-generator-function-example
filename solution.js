/*
javascript generator function example
*/

// sample array

const sample = [1, 5, 3, 7, 9, 8]

function* divideByThree(arr){
  
  for (const n of arr) {
    yield (n/3).toFixed(2)
  
  }
}

const result = divideByThree(sample)

// driver decode
for (const b of result) {
  console.log(b)
}
