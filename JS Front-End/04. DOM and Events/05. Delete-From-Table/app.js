function deleteByEmail() {
    let email= document.getElementsByName('email')[0].value;
    let secondColumn=Array.from(document.querySelectorAll('td:nth-child(2)'))
    
    let user=secondColumn.find(box=> box.textContent==email)
    if( user){
        user.parentNode.remove()
        document.getElementById('result').textContent='Deleted.'
    }else{
        document.getElementById('result').textContent='Not found.'
    }
}