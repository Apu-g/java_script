const allCharacters = [
    // Capital letters
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",

    // Small letters
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",

    // Symbols
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
    "-", "_", "=", "+", "[", "]", "{", "}", "|",
    ";", ":", "'", '"', ",", ".", "<", ">", "?", "/", "`", "~",

    // Numbers
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");

function generatePasswords() {
    pass= parseInt(document.getElementById("pass-length").value,10);
    password1.textContent = "";
    password2.textContent = "";
    if (isNaN(pass) || pass <= 0) {
        alert("Please enter a valid password length.");
        return;
    }

    for (let i = 0; i < pass; i++) {
        let random = Math.floor(Math.random() * allCharacters.length);
        password1.textContent += allCharacters[random];
        console.log(random);
        let random1 = Math.floor(Math.random() * allCharacters.length);

        password2.textContent += allCharacters[random1];
    }
}
function copyText(id) {
    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text)
}

