const findTheOldest = function(arrayObj) {
    // let output;
    // let currOutputAge;

    // for (let i = 0; i < arrayObj.length; i++) {

    //     let currObj = arrayObj[i];
    //     let currBirthDate = currObj.yearOfBirth;
    //     let currDeathDate = ('yearOfDeath' in currObj) ? currObj.yearOfDeath : (new Date()).getFullYear();
    //     let currAge = currDeathDate - currBirthDate;
    //     if (i == 0) {
    //         output = currObj;
    //         currOutputAge = currAge;
    //         continue;
    //     }

    //     if (currAge > currOutputAge) {
    //         output = currObj;
    //         currOutputAge = currAge;
    //     }
    // }

    // return output;

    let output = arrayObj.reduce((accum, currObj) => {

        if (!currObj['yearOfDeath']) {
            currObj['yearOfDeath'] = (new Date()).getFullYear();
        }
        
        for (key in currObj) {
            if (!accum[key]) {
                accum[key] = currObj[key];
            }
        }

        let accumAge = accum.yearOfDeath - accum.yearOfBirth;
        let currAge = currObj.yearOfDeath - currObj.yearOfBirth;

        return (accumAge > currAge) ? accum : currObj;
    },{});
    return output;
};

// Do not edit below this line
module.exports = findTheOldest;
