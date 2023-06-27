window.addEventListener('load', solve);

function solve() {
    let inputs = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        fromDate: document.getElementById('from-date'),
        days: document.getElementById('days-count'),
    }
    let nextBtn = document.getElementById("next-btn"); nextBtn.addEventListener("click", nextFn)
    let ticketPreview = document.querySelector('.ticket-info-list')
    function nextFn(event) {
        event.preventDefault()

        let firstName = inputs.firstName.value
        let lastName = inputs.lastName.value
        let peopleCount = inputs.peopleCount.value
        let fromDate = inputs.fromDate.value
        let days = inputs.days.value

        if (firstName === '' || lastName == '' || peopleCount == '' || fromDate == '' || days == '') { return }


        let li = document.createElement('li'); li.classList.add('ticket')
        let article = document.createElement('article'); li.appendChild(article)
        let h3 = document.createElement('h3'); h3.textContent = `Name: ${firstName} ${lastName}`; article.appendChild(h3)
        let p1 = document.createElement('p'); p1.textContent = `From date: ${fromDate}`; article.appendChild(p1)
        let p2 = document.createElement('p'); p2.textContent = `For ${days} days`; article.appendChild(p2)
        let p3 = document.createElement('p'); p3.textContent = `For ${peopleCount} people`; article.appendChild(p3)
        let editBtn = document.createElement('button'); editBtn.classList.add('edit-btn'); editBtn.textContent = "Edit"; li.appendChild(editBtn)
        let continueBtn = document.createElement('button'); continueBtn.classList.add('continue-btn'); continueBtn.textContent = "Continue"; li.appendChild(continueBtn)

        ticketPreview.appendChild(li)

        inputs.firstName.value = ''
        inputs.lastName.value = ''
        inputs.peopleCount.value = ''
        inputs.fromDate.value = ''
        inputs.days.value = ''

        nextBtn.disabled = true
        editBtn.disabled = false
        continueBtn.disabled = false

        editBtn.addEventListener('click', editFn)
        function editFn() {
            inputs.firstName.value = firstName
            inputs.lastName.value = lastName
            inputs.peopleCount.value = peopleCount
            inputs.fromDate.value = fromDate
            inputs.days.value = days
            li.remove()
            nextBtn.disabled = false
        }

        continueBtn.addEventListener('click', continueFn)
        let confirmTicket = document.querySelector('.confirm-ticket')
        function continueFn() {
            confirmTicket.appendChild(li)
            editBtn.remove()
            continueBtn.remove()
            let confirmBtn = document.createElement('button'); confirmBtn.classList.add('confirm-btn'); confirmBtn.textContent = "Confirm";
            let cancelBtn = document.createElement('button'); cancelBtn.classList.add('cancel-btn'); cancelBtn.textContent = "Cancel";

            li.appendChild(cancelBtn)
            li.appendChild(confirmBtn)



            cancelBtn.addEventListener('click', cancelFn)
            function cancelFn() {
                inputs.firstName.value = firstName
                inputs.lastName.value = lastName
                inputs.peopleCount.value = peopleCount
                inputs.fromDate.value = fromDate
                inputs.days.value = days
                li.remove()
                nextBtn.disabled = false
            }
            confirmBtn.addEventListener('click', confirmFn)
            function confirmFn() {
                let main = document.getElementById('main')
                let body = document.getElementById('body')
                main.remove()
                let h1 = document.createElement('h1'); h1.id = 'thank-you'; h1.textContent = "Thank you, have a nice day!"
                body.appendChild(h1)
                let backBtn = document.createElement('button'); backBtn.id = 'back-btn'; backBtn.textContent = 'Back'
                body.appendChild(backBtn)
                backBtn.addEventListener('click', backFn)
                function backFn() {
                    backBtn.remove()
                    h1.remove()
                    li.remove()
                    body.appendChild(main)
                    nextBtn.disabled = false
                }
            }
        }
    }
}




