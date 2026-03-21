// function convertLetter(character) {
//     switch (character) {
//         case "A":
//             return "Excellent";
//         case "B":
//             return "Good job";
//         case "C":
//             return "You Passed";
//         case "D":
//             return "Need Improvement";
//         case "E":
//             return "Failed";
//         default:
//             return "Anything Else";
//     }
// }
 
// console.log(convertLetter("G"));
 
//Count characters
 
// function counCharacterTypes(str) {
//     let countObject = { vowels: 0, digits: 0, spaces: 0, others: 0 }
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         switch (char) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             case 'A':
//             case 'E':
//             case 'I':
//             case 'O':
//             case 'U':
//                 countObject.vowels++;
//                 break;
//         }
//         switch (char) {
//             case ' ':
//                 countObject.spaces++;
//                 break;
//         }
//         switch (char) {
//             case Number(char):
//                 countObject.digits++;
//         }
 
//     }
//     return countObject;
// }
// console.log(counCharacterTypes("ahmed in 12"));
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