function listProcessor(commands) {
    let result=[]

    let funcObj={
        add: (string)=> result.push(string),
        remove: (string)=>{result=result.filter((el)=>el!==string)},
        print: ()=> console.log(result.join(','))
    }
    commands.forEach((line)=>{
        let [command,string]=line.split(' ')
        funcObj[command](string)
    })
}
listProcessor(['add hello',
    'add again',
    'remove hello',
    'add again',
    'print'])