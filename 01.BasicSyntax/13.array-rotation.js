function rotateArray(arr, rotations) {
    for (i = 0; i < rotations; i++) {        
        let element = arr.shift(); // Remove the first element
        arr.push(element); // Print the array elements separated by a single space
    }

    console.log(arr.join(' '));
}

rotateArray ([51, 47, 32, 61, 21], 2);
rotateArray ([32, 21, 61, 1], 4);