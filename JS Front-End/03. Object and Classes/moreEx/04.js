function solve ([flights, statusChanges, status]){
    let flightMap= flights.reduce((acc, curr)=>{
        let [number, destination]= curr.split(' ')
        acc[number]={
            destination,
            status:null,
        }
        return acc
    },{})

    statusChanges.forEach(change=>{
        let [number, status] = change.split(' ')
        if(flightMap[number]){
            flightMap[number].status=status
        }
        
    })
    if (status=="Ready to fly"){
        Object.entries(flightMap).forEach(([number, data])=>{
            if(data.status===null){
                data.status='Ready to fly'
                console.log(data);
            }
        })
    }
}

solve ([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK430 Cancelled'],
['Cancelled']
])