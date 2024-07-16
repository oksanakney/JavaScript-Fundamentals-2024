function solve(initialYield) {
    let days = 0;
    let yields = 0;
    let currentYield = initialYield;

    

    while (currentYield >= 100) {
        days++;
        yields += currentYield;
        yields -= 26;
        initialYield -=10;
    }

    yields -= 26;

    if (yields < 0) {
        yields = 0;
    }

    console.log(days);
    console.log(yields);    
}

solve(111);
solve(450);