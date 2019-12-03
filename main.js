let klarTextArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let encoder = document.getElementById('encoder');
let decoder = document.getElementById('decoder');

// austauschen space mit komma with join

encoder.addEventListener('click', function () {
    console.log("encoder")
    let inputText = (document.getElementById('input').value).toLowerCase();
    let key = Number(document.getElementById('key').value);
    inputTextArray = Array.from(inputText)
    let geheimtextArray = [];


    for (let i = 0; i < inputTextArray.length; i++) {
        console.log(inputTextArray[i])
        for (let j = 0; j < klarTextArray.length; j++) {

            if (inputTextArray[i] === klarTextArray[j]) {

                if (j + key > klarTextArray.length) {
                    geheimtextArray.push(klarTextArray[Math.abs(klarTextArray.length - j - key)])

                } else {
                    geheimtextArray.push(klarTextArray[j + key])

                }
            }
        }
    }
    console.log(geheimtextArray)
    console.log(geheimtextArray.join("").toUpperCase())
});

decoder.addEventListener('click', function () {
    let inputText = (document.getElementById('input').value).toLowerCase();
    let key = Number(document.getElementById('key').value);
    inputTextArray = Array.from(inputText)
    let geheimtextArray = [];
    console.log("decoder")

    for (let i = 0; i < inputTextArray.length; i++) {
        console.log(inputTextArray[i])
        for (let j = 0; j < klarTextArray.length; j++) {

            if (inputTextArray[i] === klarTextArray[j]) {

                if (j - key <= -1) {
                    geheimtextArray.push(klarTextArray[Math.abs(j - key + klarTextArray.length)])

                }
                else {
                    geheimtextArray.push(klarTextArray[j - key])

                }
            }
        }
    }
    console.log(geheimtextArray)
    console.log(geheimtextArray.join("").toLowerCase())
});
