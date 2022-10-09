// https://leetcode.com/problems/longest-repeating-character-replacement/
var characterReplacement = function(s, k) {
    let windowStart = 0;
    const lookUp = {}; // Look up acts as our window but in object form
    let range = 0;
    
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let letter = s[windowEnd];
        
        // Update our lookUp keeps track of frequency
        lookUp[letter] === undefined ? lookUp[letter] = 1 : lookUp[letter]++;
        

               // windowSize  -  mostFrequent = How many errors and if it is bigger than K
        while((windowEnd - windowStart + 1) - Math.max(...Object.values(lookUp)) > k) {
            
            
            //decrease windowSize, also decrement letter frequencty from lookUp
            lookUp[s[windowStart]]--;
            windowStart++;
        }
        
        // Window sized is windowEnd - windowStart + 1 (because of 0 index)
         range = Math.max(range, windowEnd - windowStart + 1); 
  
    }
  
    return range;
};