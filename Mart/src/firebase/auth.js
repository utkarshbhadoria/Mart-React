import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
 

export const doCreateUserWithEmailPassword = async(email, password)=>{

    return createUserWithEmailAndPassword(auth, email, password); 

}

export const doSignInWithEmailAndPassword = (email , password) =>{
    return signInWithEmailAndPassword(auth, email,password)
}

export const doSignWithGoogle = async () =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    return result;

}

export const doSignOut =()=>{
    return auth.signOut();

}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password)=>{
    return updatePassword(auth.currentUser, password)
}

export const doSendEmailVerification =() =>{
    return doSendEmailVerification(auth.currentUser , {
        url: `${window.location.origin}/home)`
    })
}
