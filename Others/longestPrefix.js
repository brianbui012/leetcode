var longestCommonPrefix = function(strs) {
    let result = "";
    let firstWord = strs[0];
    
    //Loops through each letter of the first word
    for(let i = 0; i < firstWord.length; i++) {
        let letter = firstWord[i];
        
        
        //Loops through each word in the array
        for(let j = 1; j < strs.length; j++) { 
           let word = strs[j];
            
           //If the letter does not match the letter in the new word, return result 
           if(letter !== word[i]) {
               return result;
           }
        }
        
        //! If you finish looping through the array, and it all matches, then add the letter into the result
        result += letter;
    }
    return result;
};