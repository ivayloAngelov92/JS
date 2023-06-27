let url = 'http://localhost:3030/jsonstore/collections/students'
let table = document.getElementsByTagName('tbody')[0]  // document.querySelector("#results tbody")
let form = document.getElementById('form')

window.addEventListener('load', loadStudents)

form.addEventListener('submit', addStudent)
async function loadStudents() {
    try {
        let response = await fetch(url)
        if (!response.ok) throw new Error('Error')
        let data = await response.json()
        Object.values(data).forEach((s) => {
            let tr = document.createElement('tr'); table.appendChild(tr)
            let td1 = document.createElement('td'); td1.textContent = s.firstName; tr.appendChild(td1)
            let td2 = document.createElement('td'); td2.textContent = s.lastName; tr.appendChild(td2)
            let td3 = document.createElement('td'); td3.textContent = s.facultyNumber; tr.appendChild(td3)
            let td4 = document.createElement('td'); td4.textContent = s.grade; tr.appendChild(td4)
        })
    } catch (err) { alert(err.message) }
}

async function addStudent(e) {
    e.preventDefault()
    table.innerHTML=''
    let formData = new FormData(form)
    let [firstName, lastName, facultyNumber, grade] = [...formData.values()] // [...formData.values()]
    grade = +grade
    if (firstName == '' || typeof firstName !== "string") return
    if (lastName == '' || typeof lastName !== "string") return
    if (facultyNumber == '' || typeof facultyNumber !== "string") return
    if (grade == '' || typeof grade !== "number") return

    try {
       let response= await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                facultyNumber,
                grade: `${grade}`
            })
        })
        if(!response.ok)throw new Error('Error')
        loadStudents()
    } catch (err) { alert(err.message) }


}