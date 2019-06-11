import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAH0jU5lDg_EEcXtt4BMzFXMI_ATl1UJZ0",
    authDomain: "catch-of-the-day-nick-douglas.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-nick-douglas.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

// Named Export
export { firebaseApp };

// Default Export
export default base;
