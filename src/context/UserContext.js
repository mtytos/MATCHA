import React, { createContext, useReducer, useEffect } from "react";
import {userReducer} from "../reducers/userReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, dispatch] = useReducer(userReducer, null,() => {
        const localUser = localStorage.getItem('user');
        return localUser ? JSON.parse(localUser) : null;
    });
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])
    return (
        <UserContext.Provider value={{user, dispatch}}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;