function displayNumbersAndSum(start, end) {
    // initialize array 
    let numbers = [];   
    let sum = 0; 

    for (let i = start; i <= end; i++) {
        numbers.push(i);
        sum += i;
    }    

    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}

displayNumbersAndSum(5, 10);
displayNumbersAndSum(0, 26);
