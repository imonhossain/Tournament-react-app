import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
var config = {
    apiKey: "AIzaSyAQ5SRsrcbrqtHwl1_rn3_uvL4zz4VPJ10",
    authDomain: "m-city-54b9d.firebaseapp.com",
    databaseURL: "https://m-city-54b9d.firebaseio.com",
    projectId: "m-city-54b9d",
    storageBucket: "m-city-54b9d.appspot.com",
    messagingSenderId: "374861132435"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();

firebaseDB.ref('matches').once('value').then((snapshot)=>{
    console.log(snapshot.val());
})