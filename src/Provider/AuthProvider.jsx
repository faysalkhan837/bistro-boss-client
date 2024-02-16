import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signUser = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        setLoding(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () =>{
        setLoding(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) =>{
     return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log("current user", currentUser);
            setLoding(false);
        })
        return () => {
            unSubscribe();
        }
    }, [auth])

    const useInfu = {
        user,
        loding,
        createUser,
        signUser,
        googleSignIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={useInfu}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;