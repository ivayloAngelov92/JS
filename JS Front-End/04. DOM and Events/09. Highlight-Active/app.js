function focused() {
    let inputs=Array.from(document.getElementsByTagName("input")) 
    console.log(inputs);
    inputs.forEach(input=>{
        input.addEventListener('focus', highlightFn)
        input.addEventListener('blur', removeFn)
    })
    function highlightFn(e){
       let target= e.target
       target.parentNode.className= "focused"
    }
    function removeFn(e){
        e.target.parentNode.className=''
    }

}
