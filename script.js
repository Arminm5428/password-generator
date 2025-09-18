const btn = document.querySelector(".pass-generator");
const pass1 = document.querySelector("#pass1");
const pass2 = document.querySelector("#pass2");
const upperChars = ["A", "B" ,"C" ,"D", "E", "F" ,"G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "|", ":", ";", "<", ">", "?", "/"];

function randomChars(array, num) {
    let chars = [];
    for (let i = 0; i < num; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        chars.push(array[randomIndex]);
    }
    return chars;
}

btn.addEventListener("click", () => {
    let password1 = [];
    let password2 = [];
    password1 = password1.concat(randomChars(upperChars, 5),randomChars(lowerChars, 5),randomChars(numChars, 2),randomChars(specialChars, 3));
    password2 = password2.concat(randomChars(upperChars, 5),randomChars(lowerChars, 5),randomChars(numChars, 2),randomChars(specialChars, 3));
    password1 = password1.sort(() => Math.random() - 0.5);
    password2 = password2.sort(() => Math.random() - 0.5);
    pass1.textContent = password1.join("");
    pass2.textContent = password2.join("");
})