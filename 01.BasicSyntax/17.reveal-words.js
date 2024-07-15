function revealWords(words, sentence) {
    const wordsList = words.split(', ');

    const wordLengthDict = {};

    wordsList.forEach(word =>  {
        wordLengthDict[word.length] = word;
    });
    
    const sentenceParts = sentence.split(' ');

    for (let i = 0; i < sentenceParts.length; i++) {
        const part = sentenceParts[i];
        if (part.includes('*')) {
            const templateLength = part.length;

            if (templateLength in wordLengthDict) {
                sentenceParts[i] = wordLengthDict[templateLength];
                delete wordLengthDict[templateLength];
            } 
        }              
    }

    const resultSentence = sentenceParts.join(' ');
    console.log(resultSentence);
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');