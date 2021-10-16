//make a string in url format
//remove spaces and fill it with %20

const urlify = (str) => {
    if(str && str.lenght == 0) return;

    let strArr = str.trim().split('');

    for(let i = 0; i < strArr.length; i++) {
        console.log(strArr[strArr.length - 1]);
        
        if(strArr[i] == " ") strArr[i] = "%20";   
      
    }
    return strArr.join("");
}
let str = " Hello Arif Web URL ";
urlify(str);