export const isLoggedIn=()=>{
    return localStorage.getItem('data')!==null;
}

export const doLogin=(data,next)=>{
    localStorage.setItem('data',JSON.stringify(data));
    next();
}



export const doLogout=(next)=>{
    localStorage.removeItem('data');
    next();
}

export const getCurrentUser=()=>{
    if(isLoggedIn){
        return JSON.parse(localStorage.getItem('data'))?.user;
    }
    else{
        return undefined;
    }
}