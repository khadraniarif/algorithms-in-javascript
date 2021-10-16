// we have 2 arrays
// find a common item in two arrays

//Questions asked
//what would be the size of arrays
//will the data be alwasy arrays or objects ?

//Brute force solution


const commonItemInArray = (arr1, arr2) => {
    if(arr1.length == 0 && arr2.length == 0) return;

    //iterate the loop for array1
    for(var i = 0; i < arr1.length; i++) {
        //items from arr1
        //now get the items from arr2

        for(let j = 0; j < arr2.length; j++) {
            //compare items from arr1 to all the items of arr2
            if(arr1[i] == arr2[j]) return true;
        }
    }
    return false;
}

//commonItemInArray(arr1, arr2); //O(n^2)

const uniqueArr = (arr1, arr2) => {
    let obj = {}; //empty objects

    //put all items of arr1 into obj 
    //give a value to each object as true
    for( let i = 0; i < arr1.length; i++) {
        if(!obj[arr1[i]])
            obj[arr1[i]] = true;
    }
   
    for( let j = 0; j < arr2.length; j++) {
        //compare arr2 items with obj keys
        //if it exists then array has common items
        
        if(obj[arr2[j]]) return true;
        
    }
    
    return false;
}

//uniqueArr(arr1, arr2);

//with es6 method

const uniqueArr2 = (arr1, arr2) => {
    if(arr1.length == 0 && arr2.length == 0) return

    return arr1.some(item => {arr2.includes(item)});
}
const arr1 = ['x', 'y', 'z', 'a'];
const arr2 = ['a', 'b', 'c'];
uniqueArr2(arr1, arr2);
