function focused() {
    function onFocus(event){
        event.target.parentElement.classList.add('focused')
    }
    function onBlur(event){
        event.target.parentElement.classList.remove('focused')
    }
    let inputFields=document.querySelectorAll('input')
    for(let input of inputFields){
        input.addEventListener("focus", onFocus)
        input.addEventListener('blur', onBlur)
    }
}