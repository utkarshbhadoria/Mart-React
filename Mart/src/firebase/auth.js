import { auth } from "./firebase";

 

export const doCreateUserWithEmailPassword = async(email, password)=>{

    return createUserWithEmailAndPassword(auth, email, password); 

}

export const doSignInWithEmailAndPassword = (email , password) =>{
    return doSignInWithEmailAndPassword(auth, email,password)
}

export const doSignWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;

}

export const doSignOut =()=>{
    return auth.signOut();
    
}