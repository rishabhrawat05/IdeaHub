import { myAxios } from "./helper";


export const createFeedback=(feedback,problemId)=>{
    return myAxios
    .post(`/api/feedback/create/${problemId}`,feedback)
}
export const getFeedbackFromProblemId=(problemId)=>{

    return myAxios
    .get(`/api/feedback/${problemId}`)
    .then((response)=>response.data)
}