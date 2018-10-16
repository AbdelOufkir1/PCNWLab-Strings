/*
 *  README!!!
 *  For the problems below, use only string methods / conditionals, etc
 *  it may be tempting to use concepts like looping but do not attempt! 
 */
 
 
/* 1
    @func makeEven
    @param {string} str
    @returns {string}
    @desc - if the input string is odd number of characters, 
            add a "#" to make it even number of characters
            otherwise return string
    @example - makeEven('taq');  // 'taq#'
    @example - makeEven('john'); // 'john'
*/

const makeEven = (str) => {

    if (str.length % 2 === 1){
        return str + '#';
    }
    return str;        
}

console.log(makeEven('John'));
console.log(makeEven('Taq'));

/* 2
    @func getLastChar
    @param {string} str
    @returns {string}
    @desc - return the last character in string
    @example - getLastChar('taq'); // 'q'
*/

const getLastChar = (str) => {

    return str.charAt(str.length-1);
}

// console.log(getLastChar('Abdel'));
// console.log(getLastChar('Oufkir'));


/* 3
    @func get3rdChar
    @param {string} str
    @returns {string}
    @desc - return the third character in string
    @example - get3rdChar('taq'); // 'q'
    @example - get3rdChar('mo'); // 'not enough characters!'
*/

const get3rdChar = (str) => {

    if (str.length < 3) {
        return "not enough characters";
    }
return str.charAt(2);

}

//console.log(get3rdChar('taq'));
//console.log(get3rdChar('Mo'));

/* 4
    @func get3rdCharFromEnd
    @param {string} str
    @returns {string}
    @desc - return the third character _FROM THE END_ in string
    @example - get3rdCharFromEnd('taq'); // 't'
    @example - get3rdCharFromEnd('mo'); // 'not enough characters!'
    @example - get3rdCharFromEnd('taq karim'); // 'r'
*/

const get3rdCharFromEnd = (str) => {
    if (str.length < 3) {
        return "not enough characters";   
    }
    return str.slice(-3,-2);
}


console.log('this is Mo:', get3rdCharFromEnd('mo')); // 'not enough characters!'
console.log('this is Taq: ',get3rdCharFromEnd('taq Karim')); // 'r'


/* 5
    @func startsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string STARTS with vowel, return true
    @example - startsWithVowel('taq'); // false
    @example - startsWithVowel('Dfghjkl'); // false
    @example - startsWithVowel('andy'); // true
    @example - startsWithVowel('Andy'); // true
*/

const startsWithVowel = (str) => {

    const newStr = str.toLowerCase();

    if ((newStr.charAt(0) === 'a') || (newStr.charAt() === 'e') ||
       (newStr.charAt(0) === 'o') || (newStr.charAt() === 'i') || 
       (newStr.charAt(0) === 'u')){
           return true;
       }
    return false;
}

console.log('------------------------')
console.log('String Starts with Vowel?');
console.log('taq: ', startsWithVowel('taq')); // false
console.log('Dfghkjl: ',startsWithVowel('Dfghjkl')); // false
console.log('andy: ', startsWithVowel('andy')); // true
console.log('Andy: ',startsWithVowel('Andy')); // true


/* 6
    @func endsWithVowel
    @param {string} str
    @returns {boolean}
    @desc - if string ENDS with vowel, return true
    @example - endsWithVowel('taq'); // false
    @example - endsWithVowel('Dfghjkl'); // false
    @example - endsWithVowel('andi'); // true
    @example - endsWithVowel('AndI'); // true
*/

const endsWithVowel = (str) => {
    const newStr = str.toLowerCase();
    const lastChar = str.length-1;

    if ((newStr.charAt(lastChar) === 'a') || (newStr.charAt(lastChar) === 'e') ||
       (newStr.charAt(lastChar) === 'o') || (newStr.charAt(lastChar) === 'i') || 
       (newStr.charAt(lastChar) === 'u')){
           return true;
       }
    return false;

}

console.log('------------------------')
console.log("String ends with Vowel?");
console.log('taq: ', endsWithVowel('taq')); // false
console.log('Dfghjkl: ', endsWithVowel('Dfghjkl')); // false
console.log('andi: ',endsWithVowel('andi')); // true
console.log('Andi: ',endsWithVowel('AndI')); // true

/* 7
    @func hasVowels
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one vowel, return true
    @example - hasVowels('taq'); // true
    @example - hasVowels('TAQ'); // true
    @example - hasVowels('dfghjkl'); // false
    @example - hasVowels('taq karim'); // true
*/

const hasVowels = (str) => {

    const newStr = str.toLowerCase();

    const vowels = /[a,o,e,i,u]/;
    if (vowels.test(newStr)) {
       return true;
    }
   return false;
}


console.log('------------------------')
console.log("String has Vowels?");
console.log('taq: ', hasVowels('taq')); // true
console.log('TAQ: ',hasVowels('TAQ')); // true
console.log('Dfghjkl: ',hasVowels('Dfghjkl')); // false
console.log('taq karim: ',hasVowels('taq karim')); // true


/* 8
    @func hasUpperCase
    @param {string} str
    @returns {boolean}
    @desc - if string has at least one uppercase letter, return true
    @example - hasUpperCase('tAq'); // true
    @example - hasUpperCase('TAQ'); // true
    @example - hasUpperCase('tag'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const hasUpperCase = (str) => {

    const upcase = /[A-Z]/;

    if (upcase.test(str)){
        return true;
    }
    return false;
}

console.log('------------------------')
console.log("String has UpperCase?");
console.log(hasUpperCase("tAq"));
console.log(hasUpperCase("TAQ"));
console.log(hasUpperCase("taq"));
console.log(hasUpperCase("taq karim"));


/* 9
    @func isPalindromic
    @param {string} str
    @returns {boolean}
    @desc - if string is a palindrome (ie: the same forward and backwards, like "racecar") return true
    @example - isPalindromic('racecar'); // true
    @example - isPalindromic('racecars'); // false
    @example - isPalindromic('bats see bees stab'); // false
    @example - hasUpperCase('taq karim'); // false
*/

const isPalindromic = (str) => {

    const newStr = str.split('');
    const reverseArr = newStr.reverse();
    const joinStr = reverseArr.join('');

    if (str === joinStr) {
        return true;
    }
    return false;
}

console.log('------------------------')
console.log("String is Palindromic?");
console.log(isPalindromic('Abdel'));
console.log(isPalindromic('racecar'));

/* 10
    @func getInitials
    @param {string} str
    @returns {string}
    @desc - given a name (ie: "taq karim"), return the initials (ie: "tk")
            assume there will always be at least one space between first name/last name
            assume only first and last names are provided
    @example - getInitials('taq karim'); // "tk"
    @example - getInitials('mo    mosayed'); // "mm"
    @example - getInitials('John       Smith'); // "js"
    @example - getInitials('sue RonaN'); // "sr"
*/

const getInitials = (str) => { 

    const newStr = str.toLowerCase();
    
    const spaceIndx = newStr.indexOf(' '); 
    const firstChar = newStr.slice(0,1);
    const testChar = newStr.slice(spaceIndx+1, -1);
    const finalChar = testChar.trim();
    const secondChar = finalChar.slice(0,1);

    return `${firstChar}${secondChar}`;

}

console.log('--------------------------');
console.log('Return Initals of Name')
console.log(getInitials('Abdel Oufkir'));
console.log(getInitials('John     Smith'));
console.log(getInitials('sue RonaN')); 

//Better Way to do Initials
// const getInitials = (str) => { 
    
//     const spaceIndx = str.lastIndexOf(' '); 
//     const firstChar = str.slice(0,1);
//     const secondChar = str.slice(spaceIndx+1,spaceIndx+2);

//     return `${firstChar}${secondChar}`;

// }


/* 11
    @func isPerfectStr
    @param {string} str
    @returns {boolean}
    @desc - a "perfect" string (not real, I just made this up) is defined to be a string such that:
            1. has more than three characters
            2. the three middle characters are arranged such that first character is vowel,
                second character is consonant and last character is another vowel
            3. the three middle characters are palindromic
    @example - isPerfectStr('ab'); // false
    @example - isPerfectStr('aba'); // true
    @example - isPerfectStr('asdfaeKeccc'); // false
    @example - isPerfectStr('asdfaeKeccccc'); // true
*/

const isPerfectStr = (str) => {

    if (str.length < 3) return false;
    else {
        
        const middleIdx = Math.floor(str.length/2);
        const newStr = str.slice(middleIdx-1,middleIdx+2);

        if (!isVowel(newStr.slice(0,1)) && isVowel(newStr.slice(0,1)) &&  (!isVowel(newStr.slice(0,1)))) {
         
            return false;         
            }
            else {

                if (isPalindromic(newStr)) {
                    return true;
                }  
                    return false;
                
            }
    
    }
}

const isVowel = (char) => {

    const vowels = /[a,e,o,i,u]/;
    if (vowels.test(char)){
        return true;
    }
    return false;

}

console.log("-----------------------");
console.log('Is Perfect String?');
console.log(isPerfectStr('ab'));
console.log(isPerfectStr('aba'));
console.log(isPerfectStr('asdfaeKeccc'));
console.log(isPerfectStr('asdfaeKeccccc'));




/* 12
    @func strMasher
    @param {string} str1
    @param {string} str2
    @returns {string}
    @desc - given two strings, str1 and str2, return a new string
            with str2 mashed into the middle of str1
    @example - strMasher('help', 'me'); // "hemelp"
    @example - capitalLast('hello', 'wrold'); // "helwroldlo"
*/

const strMasher = (str1, str2) => {

    const middleIdx = Math.floor(str1.length/2);

    const firstStr1 = str1.slice(0,middleIdx);
    const secondStr1 = str1.slice(middleIdx);

    const newStr = firstStr1 + str2 + secondStr1;

    return newStr;
}

console.log("-----------------------");
console.log('String Masher');
console.log(strMasher('help', 'me'));
console.log(strMasher('hello', 'world'));


