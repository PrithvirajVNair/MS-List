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

// update-score
export const updateScoreAPI = async(reqBody) => {
    return await commonAPI("put",`${serverURL}/update-score`,reqBody)
}

// ...............................USERS.....................................

//get recent shows
export const getRecentShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/recent-home`)
}

//get most rated shows
export const getMostRatedShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/most-rated-home`)
}

//get popular shows
export const getPopularShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/popular-home`)
}

//get a show
export const getAShowAPI = async(id)=>{
    return await commonAPI("get",`${serverURL}/details/${id}`)
}

//get a user -- for profile section
export const getAUserAPI = async(email,reqHeader)=>{
    return await commonAPI("get",`${serverURL}/get-a-user?email=${email}`,"",reqHeader)
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

// put list
export const putListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/edit-list`,reqBody,reqHeader)
}

// add comment
export const addCommentAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/add-comment`,reqBody,reqHeader)
}

// get comment
export const getCommentAPI = async(reqBody)=>{
    return await commonAPI("post",`${serverURL}/get-comment`,reqBody)
}

// delete comment
export const deleteCommentAPI = async(reqBody)=>{
    return await commonAPI("delete",`${serverURL}/delete-comment`,reqBody)
}


// ====> CUSTOM LIST <====

// add to list
export const addToCustomListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/add-to-custom-list`,reqBody,reqHeader)
}

// get list
export const getCustomListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-custom-list?search=${searchData}`,"",reqHeader)
}

// get fav list
export const getCustomFavListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-fav-custom-list?search=${searchData}`,"",reqHeader)
}

// add fav list
export const addCustomFavListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/add-fav-custom-list`,reqBody,reqHeader)
}

// remove fav list
export const removeCustomFavListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/remove-fav-custom-list`,reqBody,reqHeader)
}

// get planning list
export const getCustomPlanningListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-planning-custom-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getCustomWatchingListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-watching-custom-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getCustomOnHoldListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-onhold-custom-list?search=${searchData}`,"",reqHeader)
}

// get watching list
export const getCustomCompletedListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-completed-custom-list?search=${searchData}`,"",reqHeader)
}

// get dropped list
export const getCustomDroppedListAPI = async(reqHeader,searchData)=>{
    return await commonAPI("get",`${serverURL}/get-dropped-custom-list?search=${searchData}`,"",reqHeader)
}

// put status list
export const putCustomStatusListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/put-status-custom-list`,reqBody,reqHeader)
}

// put list
export const putCustomListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/edit-custom-list`,reqBody,reqHeader)
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