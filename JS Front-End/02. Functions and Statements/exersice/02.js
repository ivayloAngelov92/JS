

function calculate(a,b,c){
    function sum(a, b) {
        return a + b;
    }
    function subtract(sum, c){
        return sum - c;
    }
    let resSum= sum(a,b)
    let resSub= subtract(resSum, c)
    console.log(resSub);
}

calculate(23,
    6,
    10)
