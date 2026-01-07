/*-----------------------------Problem-1: Reverse a string--------------------------------*/ 
const stringReverser = (str) => {
    return str.split("").reverse().join("");
}
// console.log(stringReverser("hello"));



/*------------------------problem-2: Count vowels in a string-----------------------------*/ 
const vowelCounter = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const vowelFiltered = str.toLowerCase().split("").filter(letter => vowels.includes(letter));
    return vowelFiltered.length;
}
// console.log(vowelCounter("happy  bIrthday"));




/*--------------------------Problem-3: Check for Palindrome-----------------------------*/ 
const palindromeChecker = (str) => {
    if (str.split("").reverse().join("") === str) {
        return true;
    } else {
        return false;
    }
}
// console.log(palindromeChecker("madam"));




/*---------------------problem-4: Find the maximum number---------------------------------*/ 
const maxNumber = (arr) => {
    return Math.max(...arr);
}
// console.log(maxNumber([1,2,3,4,9]));




/*---------------------------problem-5: Remove Duplicates from an array---------------------*/ 
const duplicatesRemover = (arr) => {
    return [...new Set(arr)];
}
// console.log(duplicatesRemover([1,2,3,3,5,4,4,6]));




/*-------------------------problem-6: sum of all numbers in an Array-----------------------*/  
const total = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
// console.log(total([1,3,5,4,6]));




/*-----------------------problem-7: Find even numbers in an array--------------------------*/ 
const evenNumFinder = (arr) => {
    return arr.filter(num => num % 2 === 0)
}
// console.log(evenNumFinder([1,2,4,3,7,5,8]));





/*----------------------problem-8: capitalize first letter of each word--------------------*/ 
const firstLetterCapitalizer = (str) => {
    return str.split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
// console.log(firstLetterCapitalizer("visca el barca i visca catalunaya"));





/*-------------------------problem-9: Find the factorial of a number----------------------*/ 
const factorialFinder = (number) => {
    if(number===0){
        return 1
    }
    const numberToArray = new Array(number).fill(0).map((_, i) => i + 1);
    const multiplication = numberToArray.reduce((acc, curr) => acc * curr, 1);
    return multiplication;
}
// console.log(factorialFinder(0));




/*--------------------------problem-10: PingPong challenge----------------------------*/ 
const pingPong = (number) => {
    const numberToArray = new Array(number).fill(0).map((_, i) => i + 1);
    let newArray = numberToArray.map(num => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "PingPong"
        } else if (num % 3 === 0) {
            return "Ping"
        } else if (num % 5 === 0) {
            return "Pong"
        } else {
            return num
        }
    })
    const numbersWithPingPong = newArray.join(", ")
    return numbersWithPingPong;
}
// console.log(pingPong(20));