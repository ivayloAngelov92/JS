function validate() {
    let userName = document.getElementById('username')
    const userNamePattern = /^[a-zA-Z0-9]{3,20}$/g

    let email = document.getElementById('email')
    const emailPattern = /^.*@.*\..*$/g

    let password = document.getElementById('password')
    let confirmPassword = document.getElementById('confirm-password')
    const passwordPattern = /^[\w]{5,15}$/g;

    let checkbox = document.getElementById('company')
    const companyPattern = /^[0-9]{4}$/g

    document.getElementById('company').addEventListener('change', () => {
        let companyInfo = document.getElementById('companyInfo')
        if (document.getElementById('company').checked) {
            companyInfo.style.display = 'block'
        } else {
            companyInfo.style.display = 'none'
        }
    })
    document.getElementById('submit').addEventListener('click', onClick)

    function onClick(event) {
        event.preventDefault()

        let invalidFields = []

        if (!userNamePattern.test(userName.value)) {
            invalidFields.push(userName)
        }
        !emailPattern.test(email.value) ? invalidFields.push(email) : null;
        if (!passwordPattern.test(password.value) || password.value !== confirmPassword.value) {
            invalidFields.push(password)
            invalidFields.push(confirmPassword)
        }

        if (checkbox.checked) {
            let companyId = document.getElementById('companyNumber')
            if (!companyPattern.test(companyId.value) || companyId.value < 1000) {
                invalidFields.push(companyId)
            }
        }
        invalidFields.forEach((field) => {
            field.style.borderColor = "red"
        })
        invalidFields.length === 0
            ? document.getElementById('valid').style.display = "block"
            : document.getElementById('valid').style.display = "none"
    }

}
