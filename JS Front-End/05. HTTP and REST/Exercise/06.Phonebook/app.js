function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', loadFn)
    document.getElementById('btnCreate').addEventListener('click', createFn)

}
let url = "http://localhost:3030/jsonstore/phonebook"
let phonebook = document.getElementById('phonebook')

async function loadFn() {
    try {
        let response = await fetch(url)
        if (!response.ok) { throw new Error("Error") }
        let data = await response.json()
        phonebook.innerHTML = ''
        Object.values(data).forEach((p) => {
            let li = document.createElement('li'); li.textContent = `${p.person}: ${p.phone}`
            phonebook.appendChild(li)
            let deleteBtn = document.createElement('button'); deleteBtn.textContent = 'Delete'
            deleteBtn.setAttribute('id', p._id); deleteBtn.addEventListener('click', deleteFn); li.appendChild(deleteBtn)
        })
    } catch (err) { alert(err.message) }
}

async function deleteFn(event) {
    let currentId = event.target.id
    try {
        let response = await fetch(`${url}/${currentId}`, {
            method: "DELETE"
        })
        if (!response.ok) throw new Error('error')
        loadFn()
    } catch (err) { alert(err.message) }

}
async function createFn() {
    let name = document.getElementById('person')
    let phone = document.getElementById('phone')
    try {
            await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                person: name.value.trim(),
                phone: phone.value.trim()
            })
        })
    } catch (err) { alert(err.message) }
    name.value = ''
    phone.value = ''
}

attachEvents();