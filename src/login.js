import firebase from "firebase";

import { Router } from 'react-router'

export async function GoogleLogin(props, redirectTo) {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
        const result = await firebase.auth().signInWithPopup(provider);
        const token = result.credential.accessToken;
        const user = result.user;
        const { match, location, history } = props;
        history.push(redirectTo);

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log('errorMessage', errorMessage);
    }
}

export async function FacebookLogin(props, redirectTo){
    const provider = new firebase.auth.FacebookAuthProvider();
    try{
        const result = await firebase.auth().signInWithPopup(provider);
        const token = result.credential.accessToken;
        const user = result.user;
        console.log('user', user);
        const { match, location, history } = props;
        history.push(redirectTo);
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log('errorMessage', errorMessage);
    }
}
