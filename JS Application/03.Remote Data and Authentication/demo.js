// destructioring
let formData= new FormData(even.target)
let {email, pass}= Object.fromEntries(formData.entries)

let options={
    method:"post/get...",
    headers:{
        'Content-Type': "application/json"
    },
    body: JSON.stringify({email,pass})
}

try{
let response= await fetch(url, options)

let data=await response.json()
localStorage.setItem('accessToken', data.accessToken)
}catch(err){
    alert(err.message)
}


//
let accessToken= response.accessToken
localStorage.setItem('authToken', accessToken)
let token= localStorage.getItem('accessToken')

let option={
    method:'get',
    headers:{
        'X-Authorization': token
    }
}