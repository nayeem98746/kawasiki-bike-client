import { useEffect, useState } from "react";
import initializeaFirebase from "../Pages/Login/FireBase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged ,  signOut, signInWithEmailAndPassword , updateProfile } from "firebase/auth";


initializeaFirebase()
const useFirebase = () => {
    const [user , setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin , setAdmin] = useState(false)
    const auth = getAuth();
    // register log in
    const registerUser = (email,password ,name, history)=> {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
            const newUser = {email, displayName: name};
            setUser(newUser)
            userDatabase(email, name)
            updateProfile(auth.currentUser, {
                displayName: name 
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });
            history.replace('/')
           
          })
          .catch((error) => {
            
            setAuthError(error.message);
            
          })
          .finally(() => setIsLoading(false));
    }
    // sign in loginUser
    const loginUser = (email, password, location, history) => {
        setIsLoading(true )
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
            const destination = location?.state?.from || '/purchase';
            history.replace(destination)
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {  
          setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

      useEffect(() => {
        fetch(`https://still-everglades-27844.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))

      }, [user.email])

    useEffect( () => {
      const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe
    } ,[])


    const logout = () =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));
    } 

    const userDatabase = (email, displayName) => {
      const user = {email, displayName}
      fetch('https://still-everglades-27844.herokuapp.com/users', {
        method: 'POST',
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(user)
      })
      .then()

    }




    return{
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout
    }
}

export default useFirebase;