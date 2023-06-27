function colorize() {
    let rows=document.querySelectorAll("table tr")
    for(let i=1; i<rows.length;i++){
        i%2==1? rows[i].style.background='teal':null;
    }
}