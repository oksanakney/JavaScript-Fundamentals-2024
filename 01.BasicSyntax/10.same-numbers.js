function checkDigitsAndSum(number) {
    let numStr = number.toString();

    let allSame = true;

    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== numStr[0]) {
            allSame = false;
            break;
        }
    }

    let sum = 0;
    for (let i = 1; i < numStr.length; i++) {
        sum += parseInt(numStr[i], 10);
    }

    console.log(allSame);
    console.log(sum);      
}

checkDigitsAndSum (2222222);
checkDigitsAndSum (1234);
