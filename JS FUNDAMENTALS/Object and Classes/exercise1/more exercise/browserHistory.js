function solve(browserLog,commands) {
    commands.forEach((command)=>{
        let action=command.split(' ')[0]
        let site=command.split(' ')[1]
        switch(action){
            case 'Close': 
            for(let opened of browserLog["Open Tabs"]){
                if(opened===site){
                    let index= browserLog["Open Tabs"].indexOf(opened)
                    browserLog["Open Tabs"].splice(index,1)
                    browserLog["Recently Closed"].push(opened)
                    browserLog["Browser Logs"].push(command)
                }
            } ; break
            case 'Open': 
            browserLog["Open Tabs"].push(site)
            browserLog["Browser Logs"].push(command)
            ; break
            case 'Clear':
                browserLog["Open Tabs"]=[]
                browserLog["Recently Closed"]=[]
                browserLog["Browser Logs"]=[]
            ; break
        }
    })
    console.log(browserLog["Browser Name"]);
    console.log(`Open Tabs: ${browserLog["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserLog["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserLog["Browser Logs"].join(', ')}`);
}

solve({"Browser Name":"Mozilla Firefox",

"Open Tabs":["YouTube"],

"Recently Closed":["Gmail",

"Dropbox"],

"Browser Logs":["Open Gmail",

"Close Gmail", "Open Dropbox",

"Open YouTube", "Close Dropbox"]},

["Open Wikipedia", "Clear History and Cache", "Open Twitter"])