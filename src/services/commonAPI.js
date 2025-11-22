import axios from "axios";

export const commonAPI = async(httpMethod,url,reqBody,reqHeader)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}