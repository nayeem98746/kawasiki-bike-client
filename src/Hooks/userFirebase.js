import { useEffect, useState } from "react";
import initializeaFirebase from "../Pages/Login/FireBase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,  signOut, signInWithEmailAndPassword } from "firebase/auth";


initializeaFirebase()
const useFirebase = () => {
    const [user , setUser] = useState({})
    const auth = getAuth();

    const registerUser = (email,password )=> {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    // sign in loginUser
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }



    useEffect( () => {
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
          });
          return () => unsubscribe
    } ,[])


    const logout = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    } 



    return{
        user,
        registerUser,
        loginUser,
        logout
    }
}

export default useFirebase;