window.addEventListener('load', solution);

function solution() {
  inputs = {
    fName: document.getElementById('fname'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    address: document.getElementById('address'),
    code: document.getElementById('code'),
    infoPreview: document.getElementById("infoPreview")
  }
  let submitBtn = document.getElementById('submitBTN'); submitBtn.addEventListener('click', submitFn)

  function submitFn() {
    let fName = inputs.fName.value
    let email = inputs.email.value
    let phone = inputs.phone.value
    let address = inputs.address.value
    let code = inputs.code.value
    if (fName == '' || email == '') { return }

    let li1 = document.createElement('li'); li1.textContent = `Full Name: ${fName}`; inputs.infoPreview.appendChild(li1)
    let li2 = document.createElement('li'); li2.textContent = `Email: ${email}`; inputs.infoPreview.appendChild(li2)
    let li3 = document.createElement('li'); li3.textContent = `Phone Number: ${phone}`; inputs.infoPreview.appendChild(li3)
    let li4 = document.createElement('li'); li4.textContent = `Address: ${address}`; inputs.infoPreview.appendChild(li4)
    let li5 = document.createElement('li'); li5.textContent = `Postal Code: ${code}`; inputs.infoPreview.appendChild(li5)

    inputs.fName.value = ''
    inputs.email.value = ''
    inputs.phone.value = ''
    inputs.address.value = ''
    inputs.code.value = ''
    submitBtn.disabled = true


    let editBtn = document.getElementById("editBTN"); editBtn.disabled = false; editBtn.addEventListener('click', editFn)
    let continueBtn = document.getElementById("continueBTN"); continueBtn.disabled = false; continueBtn.addEventListener('click', continueFn)

    function editFn() {
      inputs.fName.value = fName
      inputs.email.value = email
      inputs.phone.value = phone
      inputs.address.value = address
      inputs.code.value = code
      inputs.infoPreview.innerHTML = ''
      submitBtn.disabled = false
      editBtn.disabled = true
      continueBtn.disabled = true
    }
    function continueFn() {
      let block = document.getElementById('block')
      block.innerHTML = ""
      let h3 = document.createElement('h3'); h3.textContent = `Thank you for your reservation!`
      block.appendChild(h3)
    }
  }
}
