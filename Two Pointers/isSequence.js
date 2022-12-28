// 392. is Subsequence 

//Time Complexity O(n)
var isSubsequence = function(s, t) {
    
    let start = 0;
    
    for(let i = 0; i < t.length; i++){
        console.log(s[start], t[i])
        if(s[start] === t[i]) {
            start++;
        }
    }
    return start === s.length;
};