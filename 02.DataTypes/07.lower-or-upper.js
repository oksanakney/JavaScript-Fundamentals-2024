function printCharType(char) {
    if (char === char.toLowerCase()) {
        console.log('lower-case');
    } else if (char === char.toUpperCase()) {
        console.log('upper-case');
    }
}

printCharType('L');
printCharType('f');
