
import "firebase/auth";
const firebase = require('firebase')

const config =
    {
        apiKey: "AIzaSyAk37kYLM7qXK6dMmtX97XV9BzzM-NNEyI",
        authDomain: "taller-de-vehiculos.firebaseapp.com",
        databaseURL: "https://taller-de-vehiculos.firebaseio.com",
        projectId: "taller-de-vehiculos",
        storageBucket: "taller-de-vehiculos.appspot.com",
        messagingSenderId: "1000338854361",
        appId: "1:1000338854361:web:175f3c6bb5139d190049c8",
        measurementId: "G-0L84KQ10YW"
    };
    const app = firebase.initializeApp(config);
    
    export default app;