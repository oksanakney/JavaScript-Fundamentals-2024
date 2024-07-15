function findSpecialWords(input) {
    const regex = /(#[A-Za-z]+)/g;
    let match;
    let result = [];

    while ((match = regex.exec(input)) !== null) {
        const word = match[1].substring(1);
        result.push(word);
    }
    
    result.forEach(word => console.log(word));
}

findSpecialWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
findSpecialWords('The symbol # is known #variously in English-speaking #regions as the #number sign');