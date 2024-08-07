function mergeArrays(arr1, arr2) {
    
    // Initialize the result array
    let resultArray = [];
    let maxLength = Math.max(arr1.length, arr2.length);

    // Iterate the elements of arrays doing the operations between them
    for (let i = 0; i < maxLength; i++) {
        let elem1 = arr1[i] || "";
        let elem2 = arr2[i] || "";
        if (i % 2 === 0) {
            let num1 = parseFloat(elem1);
            let num2 = parseFloat(elem2);

            // If either element is not a number, treat it as 0
            if (isNaN(num1)) num1 = 0;
            if (isNaN(num2)) num2 = 0;
            resultArray.push((Math.floor(num1 + num2)).toString());
            //resultArray.push((parseInt(arr1[i]) + parseInt(arr2[i])).toString());
        } else {
            resultArray.push(elem1 + elem2);
            //resultArray.push(arr1[i] + arr2[i]);
        }
    }

    console.log(resultArray.join(' - '));
   
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);


/*Write a function, which receives two string arrays and merges them into a third array.  
    • If the index of the element is even, add into the third array the sum of both elements at that index
    • If the index of the element is odd, add the concatenation of both elements at that index */