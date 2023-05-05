import axios from "axios";
import { useState, createContext, useLayoutEffect } from "react";
import { ACCESS_TOKEN } from '../shared/constants';

export const AuthContext = createContext();

// Provide Context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [login, setLogin] = useState(false);
    const [token, setToken] = useState(localStorage.getItem(ACCESS_TOKEN) || '');
    const [loading, setLoading] = useState(true);
    const api = "https://edison-garage-api.savvycom.xyz/api/users/me";

    const setKey = (token) => {
        // save token to local storage
        localStorage.setItem(ACCESS_TOKEN, token);
        setToken(token);
    }

    useLayoutEffect(() => {
        if (token !== "" || token !== undefined) {
            setLoading(true)
            try {
                const config = {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    params: {
                        populate: 'role,avatar'
                    }
                };
                axios.get(api, config).then((res) => {
                    setUser(res.data);
                    setLogin(true);
                });
            } catch (err) {
                console.error("11111111", err);
                logout();
            } finally {
                setLoading(false);
            }
        } else {
            console.error("222");

            setLoading(false);
        }
    }, [token]);

    const logout = () => {
        setKey("");
        setUser(null);
        setLogin(false);
    }

    const auth = {
        checkLogin: login,
        auth: user,
        setKey: setKey,
        logout: logout
    }

    return <AuthContext.Provider value={auth}>
        {
            loading ? <>loading...</> : children
        }
    </AuthContext.Provider>;
};