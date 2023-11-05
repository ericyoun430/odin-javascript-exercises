const sumAll = function(int1, int2) {
    let output = 0;

    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (typeof int1 != "number") {
        return "ERROR";
    }

    if (typeof int2 != "number") {
        return "ERROR";
    }

    if (int1 > int2) {
        while (int2 <= int1) {
            output+= int2;
            int2++;
        }
    } else {
        while (int1 <= int2) {
            output+= int1;
            int1++;
        }
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
