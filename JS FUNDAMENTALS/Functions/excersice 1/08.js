    function perfectNumber(number) {
        let temp = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                temp += i;
            }
        }
    
        if (temp === number && temp !== 0) {
            console.log("It is a perfect number.");
        }
        else {
            console.log("It is not a perfect number.");
        }
    }

perfectNumber(6)