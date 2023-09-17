function solve(day, age) {
    let result
    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) { result = `12$` };
            if (age > 18 && age <= 64) { result = `18$` };
            if (age > 64 && age <= 122) { result = `12$` };

            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) { result = `15$` };
            if (age > 18 && age <= 64) { result = `20$` };
            if (age > 64 && age <= 122) { result = `15$` };
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) { result = `5$` };
            if (age > 18 && age <= 64) { result = `12$` };
            if (age > 64 && age <= 122) { result = `10$` };
            break;
        default: result = `Error!`; break

    }
    console.log(result);
}
solve('Weekend',
    -2)