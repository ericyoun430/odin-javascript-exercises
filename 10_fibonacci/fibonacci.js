const fibonacci = function(input) {
    let a = 1;
    let b = 1;
    let curr = 0;

    switch (true) {
        case input < 0:
            return "OOPS";
        case typeof input === 'string':
            input = parseInt(input);
            break;
    }

    if (input === 1) {
        return 1;
    } else if (input === 2) {
        return 1;
    }

    for (let i = 0; i < input; i++) {
        if (i== 1 || i == 0) {
            continue;
        }
        curr = a + b;
        a = b;
        b = curr;
    }

    return curr;


};

// Do not edit below this line
module.exports = fibonacci;
