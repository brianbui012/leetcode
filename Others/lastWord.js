var lengthOfLastWord = function(s) {
    let letterCount = 0;    
    let i = s.length - 1;

    while(s[i] === " ") {
        i--;
    }
    
    while(i >= 0 && s[i] !== " "){
        if(s[i] === " ") {
            return letterCount;
        }
        
        letterCount++;
        i--;
    }
    
    return letterCount;
};