const str = "arif";
const isPallindrom = (str) => {
    //chk if str length more than 2
    if(str.length <= 2) return str;

    let strArr = str.split(''), 
    newStr = "";

    for(let i = str.length -1; i >= 0; i--) {
        newStr += strArr[i];
    }
    if(str === newStr) return true;
    else return false; 
}

//isPallindrom(str);

//second version

const isPallindrom2 = (str) => {
    str = str.replace(/\W/g, '');
    str.toLowerCase();

    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[str.length - 1 - i]) {
            return `string is pallindrom`;
        } else {
            return `string is not pallindrom`;
        }
    }

}

//isPallindrom2(str);

//thirs version

const isPallindrom3 = (str) => {
    return str === str.split('').reverse().join('');
}

isPallindrom3(str);