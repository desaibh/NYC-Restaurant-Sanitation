const firebase = require('firebase');

let config = {
  apiKey: "AIzaSyA1d1WcyjE2mp21z2PN0pMiJmZsdNq3Pqg",
  authDomain: "restaurant-react.firebaseapp.com",
  databaseURL: 'https://restaurant-react.firebaseio.com',
  storageBucket: "restaurant-react.appspot.com",
  messagingSenderId: "487867866934"
};
firebase.initializeApp(config);

module.exports = firebase;
