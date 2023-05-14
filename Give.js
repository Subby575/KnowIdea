const googleAuth = document.getElementById("googleAuth");
const create_acnt = document.getElementById("create_acnt");
const back = document.getElementById("back");
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const fullName = document.getElementById("fullName");
const password = document.getElementById("password");
const errorMsg = document.getElementById("error");

const load_bx = document.querySelector(".load_bx");
const load_text = document.querySelector(".load_text");
const loading = document.querySelector(".loading");
const check = document.getElementById("check");

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwsWXvoS6hGCSKU0fXWk081GA2216X16E",
  authDomain: "knowidea-e2be1.firebaseapp.com",
  databaseURL: "https://knowidea-e2be1-default-rtdb.firebaseio.com",
  projectId: "knowidea-e2be1",
  storageBucket: "knowidea-e2be1.appspot.com",
  messagingSenderId: "997586097271",
  appId: "1:997586097271:web:c0867ae141d7260a286272",
  measurementId: "G-97PF7CY88V"
};
Submit.addEventListener("click",(e)=>{
let input=eInput.ariaValueMax;
let newElement=document.createElement("li");
console.log(newElement);
})



