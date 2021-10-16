const stringCompression = str => {
    //traverse through stringCompression
    //keep count of repeated chars
    //if cur count and next char are same, increament count
    //otherwise reset count to 1
    //return compressed string.

    if(str.length <= 1) return false;

    let count = 1;
    let compressedString = "";

    for(let i = 0; i < str.length; i++) {
        let currChar = str[i];
        let nextChar = str[i + 1];

        if(currChar === nextChar) {
            count++;
        } else {
            compressedString += currChar + String(count);
            count = 1;
        }
    }

    return compressedString.length < str.length ? compressedString : str;
};

stringCompression('aaa'); //output a3
stringCompression('aaabbbaaccd'); //output a3b3a2c2d1