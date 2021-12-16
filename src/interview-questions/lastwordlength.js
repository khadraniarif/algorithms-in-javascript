//last word length
//given a string with words, count the length of last word
//do not count spaces

const str = "Hello World";

const lastWordLength = str => {
    let lastWLength = 0;
    let lastWord = false;
    
    if(str.length === 0) return lastWLength;

    for(let i = str.length -1 ; i >=0; i--) {
        if(str[i] !== " ") {
            lastWord = true;
            lastWLength++;
        } else {
            if(lastWord)
                break;
        }
    }

    return lastWLength;
}
// Input Hellow World
//Process
    // i   str[i] lastWord lastWLength
    // 11           false   0
    //     d        true    1
    //10   l        true    2
    //9    r        true    3
    //8    o        true    4
    //7    W        true    5
    //6
//Output: 5
console.log(lastWordLength(str));