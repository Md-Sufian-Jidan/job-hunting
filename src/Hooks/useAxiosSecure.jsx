import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { logout } = useAuth();
    const navigate = useNavigate()
    // interceptors 
    axiosSecure.interceptors.response.use(res => {
        console.log('app a asar somoy ami thami a  dekesi ki asa aitar vitor', res);
        return res;
    }, async err => {
        console.log('error from axios interceptor', err.response);
        if (err.response?.status === 401 || err.response?.status === 403) {
            await logout()
            navigate('/login')
        }
        return Promise.reject(err);
    })

    // axios.interceptors.request
    return axiosSecure;

};

export default useAxiosSecure;