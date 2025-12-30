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

//get featured shows
export const getFeaturedShowAPI = async()=>{
    return await commonAPI("get",`${serverURL}/featured-home`)
}

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

// update show /update-show
export const editAShowAPI = async(reqBody)=>{
    return await commonAPI("put",`${serverURL}/update-show/`,reqBody)
}

//get a user -- for profile section
export const getAUserAPI = async(id,reqHeader)=>{
    return await commonAPI("get",`${serverURL}/get-a-user/${id}`,"",reqHeader)
}
//get a user -- for Header section
export const getAUserWithEmailAPI = async(email,reqHeader)=>{
    console.log(email);
    
    return await commonAPI("get",`${serverURL}/get-a-email-user?email=${email}`,"",reqHeader)
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
export const deleteCommentAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/delete-comment`,reqBody,reqHeader)
}

// delete-comment-activity
export const deleteCommentActivityAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/delete-comment-activity`,reqBody,reqHeader)
}

// delete-show-activity
export const deleteShowActivityAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/delete-show-activity`,reqBody,reqHeader)
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

// delete custom list
export const deleteCustomListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/delete-custom-list`,reqBody,reqHeader)
}

// delete list
export const deleteListAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("delete",`${serverURL}/delete-list`,reqBody,reqHeader)
}

// report comment /report-comment
export const reportCommentAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/report-comment`,reqBody,reqHeader)
}

// report comment /report-comment
export const getReportAPI = async(reqHeader)=>{
    return await commonAPI("get",`${serverURL}/get-report`,"",reqHeader)
}

// get-list-count
export const getListCountAPI = async(id)=>{
    console.log(id);
    
    return await commonAPI("get",`${serverURL}/get-list-count/${id}`)
}

// get-list-count
export const getListtestCountAPI = async(id)=>{
    return await commonAPI("get",`${serverURL}/get-list-count/${id}`)
}

// comment-activity
export const commentActivityAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/comment-activity`,reqBody,reqHeader)
}

// show-activity
export const showActivityAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${serverURL}/show-activity`,reqBody,reqHeader)
}

// get-activity
export const getActivityAPI = async(id)=>{
    return await commonAPI("get",`${serverURL}/get-activity/${id}`)
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

// add to featured
export const addToFeaturedAPI = async(reqBody)=>{  
    return await commonAPI("put",`${serverURL}/add-to-featured`,reqBody)
}

// remove from featured
export const removeFromFeaturedAPI = async(reqBody)=>{  
    return await commonAPI("put",`${serverURL}/remove-from-featured`,reqBody)
}

//delete report
export const deleteReportAPI = async(id)=>{
    return await commonAPI("delete",`${serverURL}/delete-report`,id)
}

// ban user
export const banUserAPI = async(email)=>{
    return await commonAPI("put",`${serverURL}/ban-user`,email)
}

// unban user
export const unBanUserAPI = async(email)=>{
    return await commonAPI("put",`${serverURL}/unban-user`,email)
}

// verify-opt
export const verifyOptAPI = async(reqBody)=>{
    return await commonAPI("put",`${serverURL}/verify-otp`,reqBody)
}

// update-profile
export const editProfileAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("put",`${serverURL}/update-profile`,reqBody,reqHeader)
}