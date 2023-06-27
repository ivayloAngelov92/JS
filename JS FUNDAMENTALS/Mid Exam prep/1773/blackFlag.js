function blackFlag(arr) {
    let days = Number(arr[0])
    let plunderPerDay = Number(arr[1])
    let expected = Number(arr[2])
    let total = 0
    for (let i = 1; i <= days; i++) {
        if (i% 3==0) {
            total += plunderPerDay * 1.5
        } else {
            total += plunderPerDay
        }
        if(i%5==0){
            total*=0.7
        }
    }
    console.log(total>=expected? `Ahoy! ${total.toFixed(2)} plunder gained.`:`Collected only ${((total/expected)*100).toFixed(2)}% of the plunder.` );
}

blackFlag(["10", "20", "380"])