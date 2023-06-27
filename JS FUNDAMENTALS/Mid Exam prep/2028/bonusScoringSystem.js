function solve(array){
    let students=Number(array.shift())
    let lectures=Number(array.shift())
    let additionalBonus=Number(array.shift())
    let currentBest=0
    let bestAttendances=0
    for(let i=0; i<students;i++){
        let currentAttendance=Number(array[i])
        let totalBonus=currentAttendance/lectures*(5+additionalBonus)
        if(totalBonus>currentBest){
            currentBest=totalBonus
            bestAttendances=currentAttendance
        }
    }
    console.log(`Max Bonus: ${Math.ceil(currentBest)}.`);
    console.log(`The student has attended ${bestAttendances} lectures.`);
}

solve ([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])