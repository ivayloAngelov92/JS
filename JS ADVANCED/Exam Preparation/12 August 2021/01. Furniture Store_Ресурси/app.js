window.addEventListener('load', solve);

function solve() {
    inputs = {
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        description: document.getElementById('description'),
        price: document.getElementById('price'),
        furnitureList: document.getElementById('furniture-list'),
        total: document.querySelector('.total-price')
    }
    let total = 0
    document.getElementById('add').addEventListener('click', addFn)

    function addFn(e) {
        e.preventDefault()

        let model = inputs.model.value
        let year = Number(inputs.year.value)
        let description = inputs.description.value
        let price = Number(inputs.price.value)

        if (model == '' || year < 0 || description == '' || price < 0) { return }

        let tr1 = document.createElement('tr'); tr1.classList.add('info');
        let td1 = document.createElement('td'); td1.textContent = model; tr1.appendChild(td1)
        let td2 = document.createElement('td'); td2.textContent = price.toFixed(2); tr1.appendChild(td2)
        let td3 = document.createElement('td'); tr1.appendChild(td3)
        let moreBtn = document.createElement('button'); moreBtn.classList.add('moreBtn'); moreBtn.textContent = 'More Info'; td3.appendChild(moreBtn)
        let buyBtn = document.createElement('button'); buyBtn.classList.add('buyBtn'); buyBtn.textContent = 'Buy it'; td3.appendChild(buyBtn)
        inputs.furnitureList.appendChild(tr1)
        let tr2 = document.createElement('tr'); tr2.classList.add('hide')
        let td4 = document.createElement('td'); td4.textContent = `Year: ${year}`; tr2.appendChild(td4)
        let td5 = document.createElement('td'); td5.colSpan = '3'; td5.textContent = `Description: ${description}`; tr2.appendChild(td5)
        inputs.furnitureList.appendChild(tr2)

        inputs.model.value = ''
        inputs.year.value = ''
        inputs.description.value = ''
        inputs.price.value = ''

        moreBtn.addEventListener('click', moreFn)
        function moreFn() {
            if (moreBtn.textContent === 'More Info') {
                moreBtn.textContent = 'Less Info'
                tr2.style.display = "contents"
            } else {
                moreBtn.textContent = 'More Info'
                tr2.style.display = 'none'
            }
        }
        buyBtn.addEventListener('click', buyFn)
        function buyFn() {
            total += price
            inputs.total.textContent = total.toFixed(2)
            tr1.remove()
            tr2.remove()
        }
    }
}
