window.addEventListener("load", solve);

function solve() {
  inputs = {
    make: document.getElementById('make'),
    model: document.getElementById('model'),
    year: document.getElementById('year'),
    fuelType: document.getElementById('fuel'),
    originalPrice: document.getElementById('original-cost'),
    sellingPrice: document.getElementById('selling-price'),
    tableBody: document.getElementById('table-body'),
    profit: document.getElementById('profit')
  }
  let profit = 0
  let publishBtn = document.getElementById('publish')
  publishBtn.addEventListener('click', publishFn)

  function publishFn(event) {
    event.preventDefault()

    let make = inputs.make.value
    let model = inputs.model.value
    let year = Number(inputs.year.value)
    let fuelType = inputs.fuelType.value
    let originalPrice = Number(inputs.originalPrice.value)
    let sellingPrice = Number(inputs.sellingPrice.value)

    if (make === "" ||
      model === '' ||
      year === '' ||
      fuelType === '' ||
      originalPrice === "" ||
      sellingPrice === "" ||
      originalPrice > sellingPrice) { return }

    let tr = document.createElement('tr')
    tr.classList.add('row')
    let td1 = document.createElement('td')
    td1.textContent = `${make}`
    let td2 = document.createElement('td')
    td2.textContent = `${model}`
    let td3 = document.createElement('td')
    td3.textContent = `${year}`
    let td4 = document.createElement('td')
    td4.textContent = `${fuelType}`
    let td5 = document.createElement('td')
    td5.textContent = `${originalPrice}`
    let td6 = document.createElement('td')
    td6.textContent = `${sellingPrice}`
    let td7 = document.createElement('td')
    let editBtn = document.createElement('button')
    editBtn.classList.add('action-btn')
    editBtn.classList.add('edit')
    editBtn.textContent = 'Edit'
    td7.appendChild(editBtn)
    let sellBtn = document.createElement('button')
    sellBtn.classList.add('action-btn')
    sellBtn.classList.add('sell')
    sellBtn.textContent = 'Sell'
    td7.appendChild(sellBtn)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tr.appendChild(td6)
    tr.appendChild(td7)
    inputs.tableBody.appendChild(tr)

    inputs.make.value = ""
    inputs.model.value = ''
    inputs.year.value = ''
    inputs.fuelType.value = ''
    inputs.originalPrice.value = ""
    inputs.sellingPrice.value = ""

    editBtn.addEventListener('click', editFn)
    function editFn() {
      inputs.make.value = make
      inputs.model.value = model
      inputs.year.value = year
      inputs.fuelType.value = fuelType
      inputs.originalPrice.value = originalPrice
      inputs.sellingPrice.value = sellingPrice
      tr.remove()
    }
    sellBtn.addEventListener('click', sellFn)

    function sellFn() {
      let li = document.createElement('li')
      li.classList.add('each-list')
      let span1 = document.createElement('span')
      span1.textContent = `${make} ${model}`
      let span2 = document.createElement('span')
      span2.textContent = `${year}`
      let span3 = document.createElement('span')
      let difference = sellingPrice - originalPrice
      span3.textContent = `${difference}`

      li.appendChild(span1)
      li.appendChild(span2)
      li.appendChild(span3)
      document.getElementById("cars-list").appendChild(li)

      profit += difference
      inputs.profit.textContent = profit.toFixed(2)
      tr.remove()
    }
  }
}
