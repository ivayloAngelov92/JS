function lockedProfile() {
    let buttons=Array.from(document.getElementsByTagName("button")) ;
    buttons.forEach(button=>{
        button.addEventListener("click",hideFn)
    })
    function hideFn(e){
        let button= e.currentTarget
        let parent = button.parentNode
        let locked= parent.querySelector('input')
        let div= parent.querySelector('div')
        if (!locked.checked) {
            if(div.style.display=="block"){
                div.style.display= 'none'
                button.textContent ='Show more'
            }else{
                div.style.display= 'block'
                button.textContent = 'Hide it'
            }
        }
    }
}

