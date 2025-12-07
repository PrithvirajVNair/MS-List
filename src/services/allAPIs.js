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

export const getShowAPI = async(searchData)=>{
    return await commonAPI("get",`${serverURL}/search?search=${searchData}`)
}

export const getRecommendationAPI = async(id) => {
    return await commonAPI("get",`${serverURL}/recommendation/${id}`)
}


// ...............................USERS.....................................

//get recent shows
export const getRecentShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/recent-home`)
}

//get popular shows
export const getPopularShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/popular-home`)
}

//get a show
export const getAShowAPI = async(id)=>{
    return await commonAPI("get",`${serverURL}/details/${id}`)
}

// get show based on category/language
export const getCategoryShowAPI = async(searchData,category)=>{
    return await commonAPI("get",`${serverURL}/category/${category}?search=${searchData}`)
}

// add to list
export const addToListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/add-to-list`,reqBody,reqHeader)
}

// get list
export const getListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-list?search=${searchData}`,"",reqHeader)
}

// get fav list
export const getFavListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-fav-list?search=${searchData}`,"",reqHeader)
}

// add fav list
export const addFavListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/add-fav-list`,reqBody,reqHeader)
}

// remove fav list
export const removeFavListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/remove-fav-list`,reqBody,reqHeader)
}

// get planning list
export const getPlanningListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-planning-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getWatchingListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-watching-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getOnHoldListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-onhold-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getCompletedListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-completed-list?search=${searchData}`,"",reqHeader)
}

// get dropped list
export const getDroppedListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-dropped-list?search=${searchData}`,"",reqHeader)
}

// put status list
export const putStatusListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/put-status-list`,reqBody,reqHeader)
}

// ...............................ADMIN.....................................

// add shows
export const addShowAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/add-shows`,reqBody)
}

// get shows
export const getAdminShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/get-adminshows`)
}

// get users
export const getUsersAPI = async()=>{
    return await commonAPI("get",`${serverURL}/get-users`)
}

//delete users
export const deleteUserAPI = async(id)=>{
    return await commonAPI("delete",`${serverURL}/delete-user`,id)
}

//delete show
export const deleteShowAPI = async(id)=>{
    return await commonAPI("delete",`${serverURL}/delete-show`,id)
}