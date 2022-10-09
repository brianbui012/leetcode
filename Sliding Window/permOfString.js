var checkInclusion = function(s1, s2) {
    const lookUpS1 = {};
    const lookUpS2 = {};
    let windowStart = 0;

    // Loop creates a hash map of s1
    
    for(let i = 0; i < s1.length; i++) {
        let letter = s1[i];
        lookUpS1[letter] === undefined ? lookUpS1[letter] = 1 : lookUpS1[letter]++;
    }
    
    // Loop builds the window of S2 the size of S1,
    
    for(let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        let letter = s2[windowEnd];
        // Builds the window
        lookUpS2[letter] === undefined ? lookUpS2[letter] = 1 : lookUpS2[letter]++;
        
        
        // When the size of the window is as large as S1 of S2
        if(windowEnd >= s1.length - 1) {
            
            // compare S2 hash table with S1, if true, we return the program and it ends
            if(helperCheck(lookUpS1, lookUpS2) === true) {
                return true;
            }
            
            // If false, we reduce the window from the head, we decrease the s2 hash table letter head by 1
            // and we move the window start up, there for making our window size smaller
            lookUpS2[s2[windowStart]]--;
            windowStart++;
        }
    }
    return false; 
    
};

const helperCheck = (s1, s2) => {
    // return true if they are equal
    
    for(let letter in s1) {
        if(s1[letter] !== s2[letter]){
            return false;
        }
    }
    return true;
}