function modifiedArrayAndSum(arr) {
    let originalArray = [...arr];

    let modifiedArray = arr.map((num, index ) => {
        if (num % 2 === 0) {
            return num + index;
        } else {
            return num - index;
        }
    });

    let originalArraySum = originalArray.reduce((acc, val) => acc + val);

    let modifiedArraySum = modifiedArray.reduce((acc, val) => acc + val); 
    
    console.log("[ " + modifiedArray.join(', ') + " ]");
    console.log(originalArraySum);
    console.log(modifiedArraySum);
}

modifiedArrayAndSum([5, 15, 23, 56, 35]);