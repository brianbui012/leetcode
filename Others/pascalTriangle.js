var generate = function(numRows) {
    const pascal = [[1]];
    
    for(let i = 0; i < numRows - 1; i++ ) {
        const temp = [0, ...pascal[i], 0];
        const row = [];
        
        for(let j = 0; j < temp.length - 1; j++) {
            row.push(temp[j] + temp[j + 1]);  
        }
        pascal.push(row);
    }
    return pascal;
};