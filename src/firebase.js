import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCyuL_eIS8A5sioUDjlYcBRgcZuRvlp5xE',
	authDomain: 'netflix-clone-df854.firebaseapp.com',
	projectId: 'netflix-clone-df854',
	storageBucket: 'netflix-clone-df854.appspot.com',
	messagingSenderId: '289691080867',
	appId: '1:289691080867:web:89b945f10c3c43f9014716',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
