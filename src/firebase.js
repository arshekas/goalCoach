import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtgCRTgGgqtfc2ZeUcP66-NFq9OBLyjs0",
    authDomain: "goalcoach-6c56c.firebaseapp.com",
    projectId: "goalcoach-6c56c",
    storageBucket: "goalcoach-6c56c.appspot.com",
    messagingSenderId: "240587516720",
    appId: "1:240587516720:web:48a2aa01350908bbaa36f5",
    measurementId: "G-YELJTM0N9P"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');