const palindromes = function (str) {
    const letters = [];
    for (let index = str.length; index >= 0; index--) {
        letters.push(str[index]);
    }
    const word = letters.join("");
    //This regex (/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g) removes special characters and spaces from str.
    //regex source: https://rswpthemes.com/how-to-remove-spaces-and-special-characters-from-a-string-in-javascript/#:~:text=In%20JavaScript%2C%20we%20can%20use,remove%20spaces%20and%20special%20characters.
    const newWord = word.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLocaleLowerCase();
    const newStr = str.replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '').toLocaleLowerCase();
    return newWord === newStr;
};

// Do not edit below this line
module.exports = palindromes;
