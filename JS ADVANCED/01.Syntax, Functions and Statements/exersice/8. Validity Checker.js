function solve(x1, y1, x2, y2) {
    function isValid(x1, y1, x2, y2) {
        let distance3 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
        if (Number.isInteger(distance3)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    isValid(x1, y1, 0, 0)
    isValid(x2, y2, 0, 0)
    isValid(x1, y1, x2, y2)
}

solve(2, 1, 1, 1)