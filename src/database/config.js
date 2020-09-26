import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyApVDll74l0UP5ttLPl62r_6namC-Dq7HA',
  authDomain: 'chain-store-management.firebaseapp.com',
  databaseURL: 'https://chain-store-management.firebaseio.com',
  projectId: 'chain-store-management',
  storageBucket: 'chain-store-management.appspot.com',
  messagingSenderId: '564135535352'
};
let app = Firebase.initializeApp(config);

export const db = app.database();