import React, {createContext,useState} from "react";

export const AuthContext= createContext();
export const AuthProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(true);
    const onLogin=()=>{
        console.log("user is logged in");
        setIsLoggedIn(true)
    }
    const onLogout=()=>{
        console.log("user is logged out");
        setIsLoggedIn(false)
    }
    return <AuthContext.Provider value={{isLoggedIn, onLogin ,onLogout}}>{children}</AuthContext.Provider>
}