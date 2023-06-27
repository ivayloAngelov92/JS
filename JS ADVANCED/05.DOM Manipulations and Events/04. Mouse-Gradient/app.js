function attachGradientEvents() {
    let gradient=document.getElementById("gradient")
    gradient.addEventListener("mousemove", gradientMove )
    gradient.addEventListener("mouseout", gradientOut)

    function gradientMove(event){
        let power= event.offsetX/(gradient.clientWidth)
        power=Math.trunc(power*100)
        document.getElementById("result").textContent=`${power}%`
    }
    function gradientOut(event){
        document.getElementById("result").textContent=''
    }

}