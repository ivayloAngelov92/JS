function solve() {
    const inputs = {
        firstName: document.getElementById('fname'),
        lastName: document.getElementById('lname'),
        email: document.getElementById('email'),
        DoB: document.getElementById('birth'),
        position: document.getElementById('position'),
        salary: document.getElementById('salary'),
        tBody: document.getElementById('tbody'),
        sum: document.getElementById('sum'),
    }
    let sum = 0

    document.getElementById('add-worker').addEventListener('click', hireFn)

    function hireFn(e) {
        e.preventDefault()
        const firstName = inputs.firstName.value
        const lastName = inputs.lastName.value
        const email = inputs.email.value
        const DoB = inputs.DoB.value
        const position = inputs.position.value
        const salary = Number(inputs.salary.value)
        if (firstName == '' || lastName == '' || email == '' || DoB == '' || position == '' || salary == "") { return }

        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${DoB}</td>
        <td>${position}</td>
        <td>${salary}</td>
        <td><button class='fired'>Fired</button> <button class="edit">Edit</button></td>`
        inputs.tBody.appendChild(tr)

        inputs.firstName.value = ''
        inputs.lastName.value = ''
        inputs.email.value = ''
        inputs.DoB.value = ''
        inputs.position.value = ''
        inputs.salary.value = ''

        sum += salary
        inputs.sum.textContent = sum.toFixed(2)

        tr.querySelector('.edit').addEventListener('click', editdFn)
        tr.querySelector('.fired').addEventListener('click', firedFn)
        function editdFn() {
            inputs.firstName.value = firstName
            inputs.lastName.value = lastName
            inputs.email.value = email
            inputs.DoB.value = DoB
            inputs.position.value = position
            inputs.salary.value = salary
            tr.remove()
            sum -= salary
            inputs.sum.textContent = sum.toFixed(2)
        }

        function firedFn() {
            tr.remove()
            sum -= salary
            inputs.sum.textContent = sum.toFixed(2)
        }
    }
}
solve()