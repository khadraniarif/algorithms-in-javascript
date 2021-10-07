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
