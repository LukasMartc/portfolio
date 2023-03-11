import { useState, useEffect, createContext } from "react";
import { useNavigate } from 'react-router-dom';
import clientAxios from "../config/ClientAxios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem('token');
            if(!token) {
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const { data } = await clientAxios('user/verify-token', config);
                setAuth(data);
                navigate('/');
            } catch (error) {
                setAuth({});
            } 
        }
        authenticateUser();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                modal,
                setModal
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default AuthContext;