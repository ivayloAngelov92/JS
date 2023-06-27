const host= 'http://localhost/3030'

async function request(method,url,data){
    let options={
        method,
        headers: {},
    }
    if(data!=undefined){
        options.headers['Content-Type']= 'application/json'
        options.body= JSON.stringify(data)
    }

    const user=JSON.parse(localStorage.getItem('user'))

    if (user){
        let token=user.accessToken
        options.headers['X-Authorization']= token
    }
    try{
        let response= await fetch(host+url, options)
        if(!response.ok){
            if(response.status==403){
                localStorage.removeItem('user')
            }
            let err= await response.json()
            throw new Error(err.message)
        }
        if(response.status==204){
            return response
        }else{
            return response.json
        }
    }catch(err){
        alert(err.message)
        throw err
    }
    
}

export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')