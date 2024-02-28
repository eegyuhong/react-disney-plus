// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAuqduF2W5acAqBu9yz7GU5VRdlrOI4mgg',
  authDomain: 'react-disney-plus-113f9.firebaseapp.com',
  projectId: 'react-disney-plus-113f9',
  storageBucket: 'react-disney-plus-113f9.appspot.com',
  messagingSenderId: '915672861900',
  appId: '1:915672861900:web:f6ee999c5f5a95e1e6c669'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
