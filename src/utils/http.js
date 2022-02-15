const baseUrl = 'http://192.168.1.1'

function postRequest(url,data){
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + url,
            data: data,
            method: 'POST',
            success: res => {
                resolve(res.data)
            },
            error: err => {
                reject(err)
            }
        })
    })
}
function getRequest(url,params){
    return new Promise((resolve, reject) => {
       uni.request({
           url: baseUrl + url,
           method: 'GET',
           data: params,
           success: res => {
               resolve(res)
           },
           error: err => {
               reject(err)
           }
       })
   })
}
module.exports = {
    get: getRequest,
    post: postRequest
}
