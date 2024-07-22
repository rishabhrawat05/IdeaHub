import { myAxios } from "./helper";

export const postProblem=(problem,userId)=>{
    return myAxios
    .post(`/api/problem/${userId}`,problem)
}
export const getAllProblems=()=>{
    return myAxios
    .get('/api/problems')
    .then((response)=>response.data)
}
export const updateProblem=(problem)=>{
    return myAxios
    .put("/api/update",problem)
}

export const getProblemById=(id)=>{
    return myAxios
    .get(`/api/problem/get/${id}`)
    .then((response)=>response.data)
}
export const getProblemByUser=(usedId)=>{
    return myAxios
    .get(`/api/problem/getAll/${usedId}`)
    .then((response)=>response.data)
}