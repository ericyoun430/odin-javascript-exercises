const palindromes = function (input) {
    input = input.replaceAll(/[\s,\.!]/g,'').toLowerCase();
    console.log(input);
    return input === input.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
