function printCommonElements(arr1, arr2) {
    // Create a Set from the second array for effective lookups
    const set2 = new Set(arr2);

    arr1.forEach(element => {
        if (set2.has(element)) {
            console.log(element);
        }
    });
}

printCommonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);
printCommonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);