var removeDuplicates = function(nums) {
    
    const unique = [];
    let pointer1 = 0;
    let pointer2 = 1;
    
    if(nums.length <= 1) return nums;
    
    while(pointer2 < nums.length) {
    
        if(nums[pointer1] !== nums[pointer2]) {
            nums[pointer1 + 1] = nums[pointer2];
            pointer1++;
        } else {
            pointer2++;
        }
        
    }
    return pointer1 + 1;
};