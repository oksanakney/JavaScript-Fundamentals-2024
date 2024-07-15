function findSum(number) {
    let numStr = number.toString();

    let sum = 0;

    for (let char of numStr) {
        sum += parseInt(char, 10);
    }

    console.log(sum);
}

findSum(245678);
findSum(97561);
findSum(543);