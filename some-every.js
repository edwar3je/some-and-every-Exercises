/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    let answer = arr.some(function(val){
        return val % 2 === 1;
    })
    return answer;
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false

Note: I had to use the solution for this one. The "some" portion of my function (see myHasAZero) worked, but the individual numbers didn't push into the array (first portion).
*/


function hasAZero(num){
    return num.toString().split('').some(function(val){
        return val === '0';
    })
}

function myHasAZero(num){
    const arr = [];
    for(let i = 0; i<num.length; i++){
        arr.push(num[i])
    }
    let result = numArr.some(function(val){
        return val === 0;
    })
    return result;
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    let answer = arr.every(function(val){
        return val % 2 === 1;
    })
    return answer;
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true

Note: This may not be the shortest answer, but this was the one I arrived at (and it works).
*/

function hasNoDuplicates(arr){
    const obj = {};
    const newArr = [];
    for(let num of arr){
        if(obj[num]){
            obj[num]++;
        }
        else{
            obj[num] = 1;
        }
    }
    for(let v in obj){
        newArr.push(obj[v])
    }
    let thisAnswer = newArr.every(function(val){
        return val === 1;
    })
    return thisAnswer;
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    let everArr = arr.every(function(val){
        return val[key];
    })
    return everArr;
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
    let allArr = arr.every(function(val){
        return val[key] === searchValue;
    })
    return allArr;
}