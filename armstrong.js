function isArmstrong(number) {
    const numStr = number.toString();
    const order = numStr.length;
    let sum = 0;

    for (let i = 0; i < order; i++) {
        const digit = parseInt(numStr[i]);
        sum += Math.pow(digit, order);
    }

    return sum === number;
}

function checkArmstrong() {
    const numberInput = document.getElementById('numberInput');
    const resultParagraph = document.getElementById('result');
    const number = parseInt(numberInput.value);

    if (isNaN(number)) {
        resultParagraph.textContent = "Please enter a valid number.";
        return;
    }

    if (isArmstrong(number)) {
        resultParagraph.textContent = `${number} is an Armstrong number.`;
    } else {
        resultParagraph.textContent = `${number} is not an Armstrong number.`;
    }
}