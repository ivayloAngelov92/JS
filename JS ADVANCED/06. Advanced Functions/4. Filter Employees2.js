function filterEmployees(data, criteria){
    let [criteriaWord, criteriaValue]=criteria.split('-')
    let arrObj=JSON.parse(data)

    let filteredEmpl=arrObj.filter((employee)=>employee[criteriaWord]===criteriaValue)
    
    filteredEmpl.forEach((employee,counter)=>console.log(`${counter++}. ${employee.first_name} ${employee.last_name} - ${employee.email}`))

}

filterEmployees(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female')