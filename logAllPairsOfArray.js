const pairsOfArray = (inputArr) => {
  let newArr = []
  for(let i = 0; i < inputArr.length; i++) {
      for (let j = 0; j < inputArr.length; j++) {
         
              newArr.push(inputArr[i]+""+inputArr[j]);
          
      }
  }
  return newArr;
}

const arr = [1, 2, 3, 4, 5];
console.log(pairsOfArray(arr));