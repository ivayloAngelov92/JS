function solve (input){
    
    let key=input.shift().split(' ').map(Number)
    let command=input.shift()
    while(command!=='find'){
        let locationCode=''
        let x=0
        for(let i=0;i<command.length;i++){
        let char=command.charCodeAt(i)-key[x]
        char=String.fromCharCode(char)
        locationCode+=char
        x++
        if(x==key.length){x=0}
        }
        // let [words, type, location]= locationCode.split('&')
        // location=location.split('<')[1].slice(0,-1)
        let type= locationCode.substring(locationCode.indexOf('&')+1,locationCode.lastIndexOf('&'))
        let location=locationCode.substring(locationCode.indexOf('<')+1,locationCode.indexOf('>'))
        console.log(`Found ${type} at ${location}`);
        command=input.shift()
    }
}

solve (["1 4 2 5 3 2 1",

`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,

"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",

"'stj)>34W68Z@",

"find"])