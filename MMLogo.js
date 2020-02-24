function MMLogo(letterWidth){
    let letter = '*';
    let space = '-'

    let startSpace = space.repeat(letterWidth);
    let startLetter = letter.repeat(letterWidth);

    let result = '';

    if (letterWidth < 3 || letterWidth > 9999) {
        console.log("You must enter an odd Number between 2 and 10000") 
        return;
    }

    else if (Number(letterWidth)%2 == 0) {
        console.log('You must enter an odd number')
        return;
    }

    let frontSpace = startSpace;
    let frontLetter = startLetter;
    let middleSpace = startSpace;
    let middleLetter = startLetter;

    for (let i = 0; i < (((letterWidth+1)/2)-1); i++) {
        if (i == 0) {
            result += '\n' + startSpace + startLetter + startSpace + startLetter + startSpace
            result += startSpace + startLetter + startSpace + startLetter + startSpace + '\n'
        }
        middleSpace = middleSpace.substring(1,middleSpace.length-1);
        frontSpace = frontSpace.substring(1,frontSpace.length);
        frontLetter += '**'

        result += frontSpace + frontLetter + middleSpace + frontLetter + frontSpace;
        result += frontSpace + frontLetter + middleSpace + frontLetter + frontSpace + '\n'
    }

    let letter1 = '';
    letter1 = frontLetter;
    middleLetter = letter1;
    frontLetter = startLetter;

    for (let i = 0; i < (((letterWidth+1)/2)-1); i++) {
        frontSpace = frontSpace.substring(1, frontSpace.length)

        result += frontSpace + frontLetter + middleSpace + middleLetter + middleSpace + frontLetter + frontSpace;
        result += frontSpace + frontLetter + middleSpace + middleLetter + middleSpace + frontLetter + frontSpace + '\n'

        middleSpace += '--'

        middleLetter = middleLetter.substring(1,middleLetter.length-1);

        if(i == ((letterWidth+1)/2)-2) {    
            result += startLetter + startSpace + startLetter + startSpace + startLetter
            result += startLetter + startSpace + startLetter + startSpace + startLetter + '\n'
        }
    }
    return result;
}

console.log(MMLogo(9))