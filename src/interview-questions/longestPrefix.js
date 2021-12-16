const arr = ["flow", "flowers", "flight"];

const longestPrefix = arr => {
    const len = arr.length;
    let longestPrefix = "";

    if(len === 0) return "";

    let firstString = arr[0];
    let firstIndex = 0;

    for(let completeLetter of firstString) {
        for(let i = 1; i < arr.length; i++) {
            const currentWord = arr[i];
            const currentLetter = currentWord.charAt(firstIndex);

            if(firstIndex > currentWord.length || completeLetter !== currentLetter) {
                return longestPrefix;
            }
        }
        longestPrefix += completeLetter;
        firstIndex++;
    }

    return longestPrefix;
};

console.log(longestPrefix(arr));