// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyC6MU1P2CrLf5VDOmYOezQTvNFwUvI2h5A',
  authDomain: 'grocery-list-6bb9d.firebaseapp.com',
  projectId: 'grocery-list-6bb9d',
  storageBucket: 'grocery-list-6bb9d.appspot.com',
  messagingSenderId: '922973499349',
  appId: '1:922973499349:web:75fedc4d9d7130ead7975c',
  measurementId: 'G-VMWWNZRN5Z',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content
  $(this).text('saved');
  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('mylist').add({
      item: value, //?
    });
    firebase.firestore().collection('secondlist').add({
      item: value, //?
    });
  });
});
