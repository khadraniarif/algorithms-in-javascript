const checkPermutation = (str1, str2) => {
    let len1 = str1.length;
    let len2 = str2.length;

    if(len1 !== len2) return false;

    let strSort1 = str1.split('').sort().join('');
    let strSort2 = str2.split('').sort().join('');

    if(strSort1 === strSort2) return true;
}

let chkstr = checkPermutation('abaa', 'aab');
console.log(chkstr);


//Print all permutation string
let str = "abc";

const printPermutation = (str, result) => {
    if(str.length == 0) console.log(result);

    for( let i = 0; i < str.length; i++) {
       let rest = str.substring(0, i) + str.substring(i + 1);
       printPermutation(rest, result + str[i]);
    }
};

printPermutation(str, '');