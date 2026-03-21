function convertLetter(character) {
    switch (character) {
        case "A":
            return "Excellent";
        case "B":
            return "Good job";
        case "C":
            return "You Passed";
        case "D":
            return "Need Improvement";
        case "E":
            return "Failed";
        default:
            return "Anything Else";
    }
}