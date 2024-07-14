function printElement(arr, step) {
    let newArr = [];
    for (i = 0; i < arr.length; i+=step) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}

printElement(['5', '20', '31', '4', '20'], 2);
printElement(['dsa', 'asd', 'test', 'tset'], 2);
printElement(['1', '2', '3', '4', '5'], 6);