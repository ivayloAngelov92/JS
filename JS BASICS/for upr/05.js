function solve(input) {
    let n = Number(input[0])
    let salary = Number(input[1])
    let deduction = 0

    for (let i=2; i<=input.length; i++){
        let page= input[i]
        if (page === "Facebook") {
            deduction += 150
        } else if (page === "Instagram") {
            deduction += 100
        } else if (page === "Reddit") {
            deduction += 50
        } else {
            deduction += 0
        }
        let total = salary - deduction

        if (total <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }console.log(salary-deduction);

}


solve(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])