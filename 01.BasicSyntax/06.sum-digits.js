function sumOfDigits(number) {
    let numToStr = number.toString();

    let sum = 0;

    for (let char of numToStr) {
        sum += parseInt(char, 10);
    }

    console.log(`${sum}`);
}

sumOfDigits (245678);
sumOfDigits (97561);
sumOfDigits (543);