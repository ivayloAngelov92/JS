function passwordValidator(pass) {
    let digitCounter = 0
    let isSymbol = false;
    let isSmallDigit=false
    let isBigDigit=false
    for (let i = 0; i < pass.length; i++) {
        let charNum = pass[i].charCodeAt()
        if (charNum >= 48 && charNum <= 57) {
            digitCounter++
        }
        if ((charNum < 65 || charNum > 90) && (charNum < 97 || charNum > 122)&&(charNum < 48 || charNum > 57)) {
            isSymbol = true
        }
    }
    if (pass.length < 6 || pass.length >10) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (isSymbol){
        console.log("Password must consist only of letters and digits");
    }
    if(digitCounter<2){
        console.log("Password must have at least 2 digits");
    }
    if(pass.length>=6&&pass.length<=10&&isSymbol==false&&digitCounter>=2){
        console.log('Password is valid');
    }
}
passwordValidator('logIn')