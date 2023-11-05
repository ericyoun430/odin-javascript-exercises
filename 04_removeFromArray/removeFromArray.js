const removeFromArray = (arr, ...theArgs) => {

    const output = arr;

    for (const arg of theArgs) {

        for (let i =0; i < output.length; i++) {
            while (arg === output[i]) {
                output.splice(i,1);
            }
        }
    }
    
    return output;

};

console.log(removeFromArray([1,2,3,1,1,2,3,4,5],1));

// Do not edit below this line
module.exports = removeFromArray;
