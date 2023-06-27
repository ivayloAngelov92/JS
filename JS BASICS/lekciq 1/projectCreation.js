function projectCreation(input){
    let firstName = input[0];
    let numberOfProjects = Number(input[1]);
    let neededHours = numberOfProjects * 3;
    let res = `The architect ${firstName} will need ${neededHours} hours to complete ${numberOfProjects} project/s.`
    console.log(res)
}

projectCreation(["George", "4"])