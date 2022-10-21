export const PasswordGeneration = (UpperCase, Numbers, Symbols, PassLength) => {

    const includeUpperCase = ArrayFromMinToMax(65, 90);
    const includeLowerCase = ArrayFromMinToMax(97, 122);
    const includeNumbers = ArrayFromMinToMax(48, 57);
    const includeSymbols = ArrayFromMinToMax(33, 47);
    return PassGen(UpperCase, Numbers, Symbols, PassLength);

    function PassGen(UpperCase, Numbers, Symbols, PassLength) {
        var passwordArray = "";

        let charCodes = includeLowerCase;

        if (UpperCase) {
            charCodes = charCodes.concat(includeUpperCase)
        }
        if (Numbers) {
            charCodes = charCodes.concat(includeNumbers)
        }
        if (Symbols) {
            charCodes = charCodes.concat(includeSymbols)
        }

        for (let i = 0; i < PassLength; i++) {
            const charCode = charCodes[Math.floor(Math.random() * charCodes.length)];
            console.log(charCode);
            passwordArray += String.fromCharCode(charCode);
        }
        console.log(passwordArray);
        return passwordArray;
    }



    function ArrayFromMinToMax(min, max) {
        const array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }
        return array
    }
}