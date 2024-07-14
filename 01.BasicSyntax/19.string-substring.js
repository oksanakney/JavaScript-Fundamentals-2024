function findWordInText(word, text) {
    const lowerWord = word.toLowerCase();
    const lowerText = text.toLowerCase();

    if (lowerText.includes(lowerWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

findWordInText('javascript', 'JavaScript is the best programming language');
findWordInText('python', 'JavaScript is the best programming language');