

const makeRequest = async (method, url, info) => {
    
    
    try{
     const res = await method(url, info && info)
        
        return {data: res.data , error: null}
    }catch(err){
       
     return {data: null, error: err.response.data?.message}
    }
}

export default makeRequest