class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
    }
    encrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        let repeatPass = '';

        for (let i = 0; i < message.length; i++) {
            for (let i = 0; i < message.length; i++) {
                repeatPass += key;
            }
        }
        repeatPass = repeatPass.substr(0, message.length).split('');
        for (let i = 0; i < repeatPass.length; i++) {
            if (message[i] == " ") {
                repeatPass.splice(i, 0, " ");
            }
        }
        repeatPass = repeatPass.join('').substr(0, message.length)
        let matrix = [];
        let k = 64;
        let c = 65;
        let maxLeter = 90;
        for (let i = 0; i < 26; i++) {
            matrix[i] = [];
            k++;
            c = 65;
            for (let j = k; j <= maxLeter; j++) {
                matrix[i].push(String.fromCharCode(j));
            }
            let h = 65;
            if (matrix[i].length < 26) {
                do {
                    matrix[i].push(String.fromCharCode(h));
                    h++;
                }
                while (matrix[i].length < 26)
            }
        }
        let index = 0;
        for (let i = 0; i < message.length; i++) {
            if (matrix[0].includes(message[i])) {
                index = matrix[0].indexOf(message[i]);
                matrix.forEach(string => {
                    if (string[0] == repeatPass[i]) {
                        result += string[index];
                    }
                })
            } else result += message[i];
        }
        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }

    decrypt(message, key) {
        if (!message || !key) throw new Error();
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        let repeatPass = '';
        for (let i = 0; i < message.length; i++) {
            for (let i = 0; i < message.length; i++) {
                repeatPass += key;
            }
        }
        repeatPass = repeatPass.substr(0, message.length).split('');
        for (let i = 0; i < repeatPass.length; i++) {
            if (message[i] == " ") {
                repeatPass.splice(i, 0, " ");
            }
        }
        repeatPass = repeatPass.join('').substr(0, message.length)
        let matrix = [];
        let k = 64;
        let c = 65;
        let maxLeter = 90;
        for (let i = 0; i < 26; i++) {
            matrix[i] = [];
            k++;
            c = 65;
            for (let j = k; j <= maxLeter; j++) {
                matrix[i].push(String.fromCharCode(j));
            }
            let h = 65;
            if (matrix[i].length < 26) {
                do {
                    matrix[i].push(String.fromCharCode(h));
                    h++;
                }
                while (matrix[i].length < 26)
            }
        }

        let index = 0;
        for (let i = 0; i < repeatPass.length; i++) {
            if (matrix[0].includes(message[i])) {
                matrix.forEach((string) => {
                    if (string[0] == repeatPass[i]) {
                        index = string.indexOf(message[i]);
                        result += matrix[0][index]
                    }
                })
            } else result += message[i];
        }

        return (this.reverse === false) ? result.split('').reverse().join('') : result;
    }
}

module.exports = VigenereCipheringMachine;