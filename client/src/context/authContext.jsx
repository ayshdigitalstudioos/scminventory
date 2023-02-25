import { createContext, useState } from "react";


export const AuthContext = createContext()


export const AuthContextProvider = ({children})=>{
    const[currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(inputs) => {
        const res = await axios
    }
}