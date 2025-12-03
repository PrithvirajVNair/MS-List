import { commonAPI } from "./commonAPI"
import { serverURL } from "./serverURL"





//register

export const registerAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/register`,reqBody)
}

//login

export const loginAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/login`,reqBody)
}

//login

export const googleLoginAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/google-login`,reqBody)
}

export const getShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/search`)
}

// ...............................ADMIN.....................................

// add showa
export const addShowAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/add-shows`,reqBody)
}

// get users
export const getUsersAPI = async()=>{
    return await commonAPI("get",`${serverURL}/get-users`)
}