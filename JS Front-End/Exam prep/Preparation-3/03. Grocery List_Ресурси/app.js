let inputs = {
    product: document.getElementById('product'),
    count: document.getElementById('count'),
    price: document.getElementById('price'),
}

let buttons = {
    add: document.getElementById('add-product'),
    update: document.getElementById('update-product'),
    load: document.getElementById('load-product'),
}
let container = document.getElementById('tbody');
let productId = ''
buttons.add.addEventListener('click', addFn)
buttons.update.addEventListener('click', updateFn)
buttons.load.addEventListener('click', loadFn)

async function loadFn(e) {
    e.preventDefault()
    try {
        let response = await fetch('http://localhost:3030/jsonstore/grocery/')
        let data = await response.json()
        clearAllSections()
        Object.values(data).forEach(input => {
            let tr = createElement('tr', null, container, [], input._id)
            createElement('td', input.product, tr, ['name'])
            createElement('td', input.count, tr, ['count-product'])
            createElement('td', input.price, tr, ['count-price'])
            let rowButtons = createElement('td', null, tr, ['btn'])
            createElement('button', 'Update', rowButtons, ['update']).addEventListener('click', updateProductFn)
            createElement('button', 'Delete', rowButtons, ['delete']).addEventListener('click', deleteProductFn)
        })
    } catch (err) { }

}
function updateProductFn(e) {
    productId = e.target.parentElement.parentElement.getAttribute('id')
    let currentProduct = e.target.parentElement.parentElement
    console.log(currentProduct);
    inputs.product.value = currentProduct.getElementsByTagName('td')[0].textContent
    inputs.count.value = currentProduct.getElementsByTagName('td')[1].textContent
    inputs.price.value = currentProduct.getElementsByTagName('td')[2].textContent
    currentProduct.remove()
    buttons.add.disabled = true
    buttons.update.disabled = false
}
async function deleteProductFn(e) {
    let trId = e.currentTarget.parentElement.parentElement.getAttribute('id')

    await fetch(`http://localhost:3030/jsonstore/grocery/${trId}`, {
        method: 'DELETE',
    })
    loadFn()
}
async function addFn(e) {
    e.preventDefault()
    try {
        console.log('working');
        if (Object.values(inputs).some(input => input.value == '')) { return }
        let data = {
            product: inputs.product.value,
            count: inputs.count.value,
            price: inputs.price.value,
        }
        await fetch('http://localhost:3030/jsonstore/grocery/', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        clearAllInputs()
        loadFn()
    } catch (err) { }

}
async function updateFn(e) {
    e.preventDefault()
    try {
        console.log('working');
        if (Object.values(inputs).some(input => input.value == '')) { return }
        let data = {
            product: inputs.product.value,
            count: inputs.count.value,
            price: inputs.price.value,
        }
        await fetch(`http://localhost:3030/jsonstore/grocery/${productId}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        })
        buttons.add.disabled = false
        buttons.update.disabled = true
        clearAllInputs()
        loadFn()
    } catch (e) { }
}

function createElement(type, content, parentNode, classes, id, useInnerHtml) {
    const element = document.createElement(type);

    if (content && useInnerHtml) {
        element.innerHTML = content;
    } else {
        if (content && type !== 'input') {
            element.textContent = content;
        }

        if (content && type === 'input') {
            element.value = content;
        }
    }

    if (classes && classes.length > 0) {
        element.classList.add(...classes);
    }

    if (id) {
        element.setAttribute('id', id);
    }

    if (parentNode) {
        parentNode.appendChild(element);
    }

    return element;
}
function clearAllInputs() {
    Object.values(inputs)
        .forEach((input) => {
            input.value = '';
        })
}
function clearAllSections() {
    container.innerHTML = ''
}