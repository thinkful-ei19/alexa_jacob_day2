// const repeat = function(fn, num) {
//     for (let i = 0; i < num; i++) {
//         console.log(fn);
//     }
// };

// function hello() {
//     return 'Hello World';
// }

// function goodbye() {
//     return 'Goodbye World';
// }

// repeat(hello(), 5);
// repeat(goodbye(), 5);





// DO NOT EDIT BETWEEN THESE LINES ----->
// Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

// // TASK: DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//     const newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       if(fn(arr[i]) === true) {
//         newArr.push(arr[i]);
//       } 
//     }
//     return newArr;
// }

//filter(myNames);

//BONUS ??
// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

// const filteredNames = filter( (myNames, function(name)) => console.log(name[0]=== 'R');

// HAZARD WANING CREATOR

/*
function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
    if (warningCounter === 0) {
        return function(location) {
            warningCounter++;
            console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        };
    }
    else return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
    };
}

const rockWarning = hazardWarningCreator("Rocks on the road");
const earthquake = hazardWarningCreator("Warning theres an earthquake");
const hurricane = hazardWarningCreator("Warning a hurricane is coming");

rockWarning("6th ave");

earthquake("Tibet");

hurricane("Florida");

earthquake("alaska");
*/

/*

function turtleMoves(array) {
    let sum = 0;
    array.filter( (num) => num[0] >= 0 && num[1] >= 0).map(num => num[0] + num[1]).forEach( (num) => sum += num); //sum = sum + num
    return sum;
}

console.log(turtleMoves([[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]));
*/

// function turtleMoves(array) {
//     return array.filter(num => num < 0 );
// }
// console.log(turtleMoves([0 , 1, 2, -1, -4]));

function decode(accumulator, word) {
       if (word.length === 3) {
        return accumulator + " ";
       }
       else {
        return accumulator + word[word.length-1].toUpperCase();
       }
}

const words = "noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest".split(" ");
console.log(words.reduce(decode,""));