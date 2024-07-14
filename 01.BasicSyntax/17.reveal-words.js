function revealWords(wordsTostring, templateString) {
    const words = wordsTostring.split(', ');
    
    words.forEach(word => {
        const template = '*'.repeat(word.length);
        while (templateString.includes(template)) {
            templateString = templateString.replace(template, word)
        }

    });

    console.log(templateString);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');