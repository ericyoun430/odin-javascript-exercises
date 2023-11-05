const reverseString = function(str) {

    // let output = input.split("").reverse().join("");

    // return output;

    let output = "";

    for (let i = str.length -1; i >= 0; i--) {
        output+= str[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
