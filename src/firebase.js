import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyC0IJIO7ZutFhRRnYmnWRb-iChCQIsnvcQ",
  authDomain: "students-3724a.firebaseapp.com",
  databaseURL: "https://students-3724a.firebaseio.com",
  projectId: "students-3724a",
  storageBucket: "students-3724a.appspot.com",
  messagingSenderId: "218698168337",
  appId: "1:218698168337:web:f85bbb5376490648d759b0",
  measurementId: "G-X9EE97QZJS"
};

const app = Firebase.initializeApp(config);
const firebase = app.database();

export default firebase;