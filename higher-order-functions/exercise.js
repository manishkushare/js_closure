}
// Challenge 1
function addTwo(num) {
    return num + 2;

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + 's';
}

// uncomment these to check your work
console.log(addS('pizza'));
// console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    const finalArray = [];
    for(let i=0;i <array.length; i++) {
        finalArray.push(callback(array[i]));
    }
    return finalArray;
} 
function addTwo(num) {
    return num + 2;
}  
console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    var arr= [];
    for(var i=0; i<array.length; i++) {
        arr.push(callback(array[i])); 
    }
    return arr;
}
function cb(num) {
   return num*4;
}
console.log(forEach([1,2,3,4], cb));
// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var finalArray =[]
    array.forEach(n => {
        finalArray.push(callback(n));
    })
    return finalArray;
} 
function addTwo(num) {
    return num + 2;
}  
console.log(mapWith([1, 2, 3], addTwo));

//Extension 2
function reduce(array, callback, initialValue) {
    var acc= initialValue;
    // var finalArray =[];
    for(let i=0; i< array.length;i++){
        acc =  (callback(array[i], acc));
    }
    return acc;
}
function cb(num,acc){
    return num+acc;
}
reduce([2,4,6,8],cb,0);

//Extension 3
function intersection(...arrays) {
    var myArray = arrays;
    const intersectionValue = myArray.reduce((a, arr) => (
        a.filter(num => arr.includes(num))
      ));
      return intersectionValue;
      console.log(intersectionValue);
}

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arrays) {
    let newArray = arrays;
    let unionArray = newArray.reduce((acc,cv) => {
        let filterdArray = cv.filter(num => !acc.includes(num))
        return acc.concat(filterdArray);
    },[])
    return unionArray;
}

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
let obj = {};
let returnObj = array1.reduce((acc,cv,i) => {
  if(cv.toUpperCase() == array2[i]) {
    acc[cv] = array2[i];

  } 
  return acc;
},{});
return returnObj;
}

console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.map(arrVal => ({[arrVal] : arrCallbacks.reduce((arrValsOfCallback,callback) => arrValsOfCallback.concat([callback(arrVal)]),[])})).reduce((finalObj,obj) => ({...finalObj,...obj}),{})
  
}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
