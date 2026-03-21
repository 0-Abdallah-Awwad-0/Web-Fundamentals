function countCharacterTypes(str) {
    let counts = {
        vowels: 0,
        digits: 0,
        spaces: 0,
        others: 0
    };
 
    const vowelsList = "aeiouAEIOU";
 
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        switch (true) {
            case vowelsList.includes(char):
                counts.vowels++;
                break;
            case (char >= '0' && char <= '9'):
                counts.digits++;
                break;
            case (char === ' '):
                counts.spaces++;
                break;
            default:
                counts.others++;
        }
    }
 
    return counts;
}
 
 
console.log(countCharacterTypes("123"));