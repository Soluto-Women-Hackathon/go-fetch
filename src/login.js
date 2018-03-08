import firebase from "firebase";

export async function GoogleLogin(redirectTo) {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const token = result.credential.accessToken;
        const user = result.user;
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
    }
}

export async function FacebookLogin(redirectTo){
    const provider = new firebase.auth.FacebookAuthProvider();
    try{
        const result = await firebase.auth().signInWithPopup(provider);
        const token = result.credential.accessToken;
        const user = result.user;
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
    }
}
