import { createContext, useReducer, useState, useEffect } from "react";
import { loginReducer } from "../reducers/loginReducer";

export const AuthContext = createContext()


export const AuthContextProvider = (props) => {
    const [user, dispatch] = useReducer(loginReducer, {})
    const [jwt, setJwt] = useState('')

    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)


    useEffect(() => {


        console.log(`from the auth context page \n this is the user: ${JSON.stringify(user)} email: ${user.email} and password ${user.password}`)
        if (user.email == "admin" && user.password == "admin12345") {
            console.log("it is in true")
            setIsUserAuthenticated(true)
        } else {
            console.log("it is in false")
            setIsUserAuthenticated(false)
        }
    }, [user])




    return (
        <AuthContext.Provider
            value={{
                isUserAuthenticated,
                jwt,
                dispatch
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

