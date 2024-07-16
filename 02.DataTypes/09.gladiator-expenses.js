function calculateExpences(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let expenses = 0;
    let helmetCounter = 0;
    let swordCounter = 0;
    let shieldCounter = 0;
    let armorCounter = 0;

    for (let  fight = 1; fight <= lostFights; fight++) {
        if (fight % 2 === 0) {
            helmetCounter++;
        }

        if (fight % 3 === 0) {
            swordCounter++;
        }

        if (fight % 6 === 0) {
            shieldCounter++;

            if (shieldCounter % 2 === 0) {
                armorCounter++;
            }
        }
    }

    expenses = (helmetCounter * helmetPrice) + (swordCounter * swordPrice) + (shieldCounter * shieldPrice) + (armorCounter * armorPrice);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

calculateExpences(7, 2, 3, 4, 5);
calculateExpences(23, 12.50, 21.50, 40, 200);