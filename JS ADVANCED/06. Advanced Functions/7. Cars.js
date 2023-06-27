function cars(commands){
    let data={}
    let funcObj={
        create: (name, inherit,parentName)=>{
            data[name]=inherit?Object.create(data[parentName]):{}
        },
        set: (name, key, value)=>(data[name][key]=value),
        print: (name)=>{
            let entry=[]
            for(let key in data[name]){
                entry.push(`${key}:${data[name][key]}`)
            }
            console.log(entry.join(','));
        }
    }
    commands.forEach((line)=>{
        let [command,name,key, value]=line.split(' ')
        funcObj[command](name,key,value)
    })
}

cars(['create c1',

'create c2 inherit c1',

'set c1 color red',

'set c2 model new',

'print c1',

'print c2'])