function convertPoundsToDollars(pounds) {

    let dollars = pounds * 1.31;
    dollars = dollars.toFixed(3);
    
    console.log(dollars);
}

convertPoundsToDollars(80);
convertPoundsToDollars(39);