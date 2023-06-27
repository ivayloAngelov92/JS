function solve(...data) {
    num = Number(data.shift());
    
    const funcShelf = {
        chop() { num /= 2 }, 
        dice() { num = Math.sqrt(num); },
        spice() { num += 1; },
        bake() { num *= 3; },
        fillet() { num *= 0.8; },
    }
    data.forEach(command => { funcShelf[command](), console.log(num) });
}

solve ('32', 'chop', 'chop', 'chop', 'chop', 'chop')