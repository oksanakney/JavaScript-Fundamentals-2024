function orderNames(names) {
    //Sorting
    names.sort((a,b) => a.localeCompare(b));

    for (i = 0; i < names.length; i++) {
        console.log(`${i+1}.${names[i]}`);
    }
}

orderNames(["John", "Bob", "Christina", "Ema"]);