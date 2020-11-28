import firebase from 'firebase'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCFRlNfz0SmE0fEXI_ynyAV3wqFkF5m5po",
authDomain: "otro-5f042.firebaseapp.com",
databaseURL: "https://otro-5f042.firebaseio.com",
projectId: "otro-5f042",
storageBucket: "otro-5f042.appspot.com",
messagingSenderId: "690655601016",
appId: "1:690655601016:web:c3fdaf127222c25434288d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();