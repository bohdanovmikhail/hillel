const symbols = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    return Math.round(randomFloat(min, max));
}

function randomString(length = 10) {
    const symbolLength = symbols.length
    let result = '';

    for (let i = 0; i < length; i++) {
        const index = randomInt(0, symbolLength - 1);
        const symbol = symbols[index];

        result += symbol;
    }

    return result;  
}

module.exports.randomFloat = randomFloat;
module.exports.randomInt = randomInt;
module.exports.randomString = randomString;