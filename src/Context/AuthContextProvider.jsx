import { createContext,useState } from "react";

export const AuthProvider=createContext()

export const AuthContextProvider=({children})=>{
    let Au=localStorage.getItem('Auth')
    const [Auth,setAuth]=useState(Au)
     const handle=(val)=>{
        setAuth(val)
     }
    return <AuthProvider.Provider value={{Auth,handle}}>{children}</AuthProvider.Provider>
}