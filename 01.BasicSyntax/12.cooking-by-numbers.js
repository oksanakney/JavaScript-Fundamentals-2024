function cookByNumbers(input) {
    let number = input[0];

    for (let i =1; i <= 5; i++) {
        switch (input[i]) {
            case 'chop':
                number /= 2;                
                break;
            case 'dice':
                number = Math. sqrt(number);                
                break;
            case 'spice':
                number += 1;                
                break;
            case 'bake':
                number *= 3;                
                break;
            case 'fillet':
                number -= number * 0.2;                
                break;
        
            default:
                number = 0;
                break;
        }
        console.log(number);
    }
}

cookByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);