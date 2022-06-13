// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
// import { getAnalytics } from 'firebase/analytics'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBfWYZ9PFuWVD5pfgPud1syu5fXvWNZOEg',
	authDomain: 'f-fake-tik-tok.firebaseapp.com',
	projectId: 'f-fake-tik-tok',
	storageBucket: 'f-fake-tik-tok.appspot.com',
	messagingSenderId: '426945905496',
	appId: '1:426945905496:web:697fa7de673fe4dc569b2d',
	measurementId: 'G-GQWL3DYBPW'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
// const auth = firebase.auth()
export { db }
