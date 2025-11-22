import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"





//register

export const requestAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/register`,reqBody)
}