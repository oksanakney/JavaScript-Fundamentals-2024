function modifyArrayAndPrint(arr) {
    // Clone tthe array to avoid modifiing the original one
    let originalArray = [...arr];

    let modifiedArray = arr.map(( num, index) => {
        if (num % 2 === 0) {
            return num + index;
        } else {
            return num - index;
        }
    });

    let originalSum = originalArray.reduce((acc, val) => num, 0);
    let modifiedSum = modifiedArray.reduce((acc, val) => num, 0);   

   

    console.log("[ " + modifiedArray.join(', ') + " ]ö");
    console.log(originalSum);
    console.log(modifiedSum);    
}

modifyArrayAndPrint([5, 15, 23, 56, 35]);