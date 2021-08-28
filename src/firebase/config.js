import firebase from 'firebase';
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBvWZnhb80tauNE1S7ZhToj-nklsDcTvLY",
  authDomain: "social-media-app-feed-up.firebaseapp.com",
  projectId: "social-media-app-feed-up",
  storageBucket: "social-media-app-feed-up.appspot.com",
  messagingSenderId: "419667440432",
  appId: "1:419667440432:web:f40dc6882a9d4af5014ef5"
};



export default firebase.initializeApp(firebaseConfig)