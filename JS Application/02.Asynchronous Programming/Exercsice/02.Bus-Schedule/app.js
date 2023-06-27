
function solve() {
    let info = document.querySelector('.info')
    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')

    let nextStop = 'depot'
    let stopName
    async function depart() {
        try {
            let res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
            let data = await res.json()
            stopName = data.name
            nextStop = data.next
            info.textContent=`Next stop ${stopName}`
            departBtn.disabled=true
            arriveBtn.disabled=false
        }
        catch (error) {
            info.textContent='Error'
            departBtn.disabled=true
            arriveBtn.disabled=true
        }
    }

function arrive() {
        info.textContent=`Arriving at ${stopName}`
        arriveBtn.disabled=true
        departBtn.disabled=false
    }

    return {
        depart,
        arrive
    };
}

let result = solve();