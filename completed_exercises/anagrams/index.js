// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution 1
/*function anagrams(stringA, stringB) {
    //use the replace() method and RegExp
    //ex: word.replace(/[^\w]/g, "") -> second param replaces exclamation points, 
    //and any other special character with an empty string
    
    var charMapA = buildCharMap(stringA);
    var charMapB = buildCharMap(stringB);
    
    //Check if both strings have different lengths
    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
    
    //Check if maps have the same values in their keys
    for(let letter in charMapA){
        if(charMapA[letter] !== charMapB[letter]) return false;
    }
    
    //if we reach this point, the two strings must be the same
    return true;
}*/

//Solution 2:  using sort() ; a much cleaner method!
function anagrams(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str){
    //sort() is a method for Arrays 
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

//Helper function to dry up code
/*function buildCharMap(str){
        const charMap = {};
        for(let char of str.replace(/[^\w]/g, '').toLowerCase()) charMap[char] ? charMap[char]++ : charMap[char] = 1;
        return charMap;
}
*/
module.exports = anagrams;
