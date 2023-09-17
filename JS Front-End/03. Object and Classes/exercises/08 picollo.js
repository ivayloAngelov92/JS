function recorder(array){
    let carPark={}
    array.forEach(line=>{
        let [direction, carNumber]=line.split(', ')
        direction==='IN'?
        carPark[carNumber]=0:
        delete carPark[carNumber]
    })

    let sorted= Object.keys(carPark).sort()
    if(Object.keys(carPark).length>0){
        console.log(sorted.join('\n'));
    }else{
        console.log("Parking Lot is Empty");
    }
}

recorder(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)