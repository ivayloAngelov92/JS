function solve (input){
    const pattern = /[A-Za-z]+([-._]*[A-Za-z]+)*@[A-Za-z]+([-._]*[A-Za-z]+)*\.[A-Za-z]+/g
    let match=input.matchAll(pattern)
    for(let mac of match){
        console.log(mac[0]);
    }

}

solve ('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')