let host = 'http://localhost:3030'

async function apiCalls(method, url, data) {
     let options={
        method,
        headers:{}
     }

     if (data) {
        options.headers['Content-Type'] = 'application/json'
        options.body = JSON.stringify(data)
     }
     const userData= JSON.parse(sessionStorage.getItem('userData'))
     if(userData){
        options.headers['X-Authorization']= userData.accessToken
     }

     try {
        const response = await fetch(`${host}${url}`, options)
        if(!response.ok){
            const error = await response.json()
            throw new Error(error.message)
        }
        return response.status===204? response : await response.json()

     } catch (error) {
        alert(error.message)
        throw error
     }
}

const methodsEnum={
    GET:'GET',
    POST:'POST',
    PUT:'PUT',
    DELETE:'DELETE'
}

export function get(url){
    return apiCalls(methodsEnum.GET, url)
}

export function post(url, data){
    return apiCalls(methodsEnum.POST, url, data)
}

export function put(url, data){
    return apiCalls(methodsEnum.PUT, url, data)
}

export function del(url){
    return apiCalls(methodsEnum.DELETE, url)
}