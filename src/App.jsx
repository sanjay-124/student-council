import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import Homepage from "./Components/Homepage"

const config = {
  apiKey:  import.meta.env.REACT_APP_APIKEY,
  authDomain:  import.meta.env.REACT_APP_AUTHDOMAIN,
  projectId:  import.meta.env.REACT_APP_PROJECTID,
  storageBucket:  import.meta.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId:  import.meta.env.REACT_APP_MESSAGINGSENDERID,
  appId:  import.meta.env.REACT_APP_APPID,
};
firebase.initializeApp(config);

function App() {

  return (
    <div>
      <Homepage/>
    </div>
  );
}

export default App;
