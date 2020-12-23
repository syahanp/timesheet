import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider: React.FC = ({ children }) => {
    const [isLogin, setLogin] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setLoading] = useState(true)

    // waiting to load login state from cookies first
    // useEffect(() => {
    //     let loginCookie = Cookies.getJSON('isLogin')

    //     const loadUserFromCookies = async () => {
    //         if (loginCookie) setLogin(loginCookie)
    //         else Cookies.set('isLogin', `${isLogin}`)
    //     }
        
    //     loadUserFromCookies()

    // }, [isLogin])

    const login = () => {
        setLogin(true)
    }

    const logout = () => {
        setLogin(false)
    }

    const value = {isLogin, login, logout, isLoading}

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;
