function solve(peopleCount, groupType, dayOfWeek) {
    const prices = {
        "Students": {
            "Friday": 8.45,
            "Saturday": 9.80,
            "Sunday": 10.46
        },
        "Business": {
            "Friday": 10.90,
            "Saturday": 15.60,
            "Sunday": 16.00
        },
        "Regular": {
            "Friday": 15.00,
            "Saturday": 20.00,
            "Sunday": 22.50
        }
    };
    // Price calculation

    let pricePerPerson = prices[groupType][dayOfWeek];
    let totalPrice = peopleCount * pricePerPerson;

    // Discounts
    if (groupType === "Students" && peopleCount >= 30) {
        totalPrice = totalPrice * 0.85;        
    } else if (groupType === "Business" && peopleCount >=100) {
        totalPrice = totalPrice - (pricePerPerson * 10);
    } else if (groupType === "Regular" && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice = totalPrice * 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

solve (30, "Students", "Sunday");