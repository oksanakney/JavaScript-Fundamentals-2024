function splitPascalCase(input) {
    const words = input.split(/(?=[A-Z])/);

    words.join(', ');

    console.log(words);
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo');