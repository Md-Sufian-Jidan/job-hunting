import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isLoading, setIsLoading] = useState(true)

    //create user 
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //login user 
    const loginUser = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };
    // google login
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setIsLoading(false)
        });
        return () => {
            unsubscribe();
        }
    },[]);

    const userInfo = { user, isLoading, createUser, loginUser, googleLogin }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
  };
export default AuthProvider;