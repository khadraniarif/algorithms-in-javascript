/*
 1. Brute force -  2 loops O(n sqrt 2)
 2. Sort first, then walk through O(n) runtime, constant space O(C)
 3. Hashmap - O(n), constant space O(C)
 4. Boolean Array => O(N) runtime and space complexity is O(1)
*/
const isUnique = (str) => {
  let obj = {};
  for(let i = 0; i < str.length; i++) {
      if(obj[str[i]] && obj[str[i]] == 1) {
          return false;
      } else {
          obj[str[i]] = 1;
      }
  }
  return true;  
};
let res = isUnique('abccd');
console.log(res);
