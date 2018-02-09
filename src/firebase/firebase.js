import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };





















































// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log("Child removed: ", snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log("Child changed: ", snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log("Child added: ", snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// }, (error) => {
//     console.log(error);
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 2300,
//     createdAt: 976123498763
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//     console.log('Data fetching error: ', error);
// });

// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 5000);

// database.ref('job/company')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     });

// database.ref().set({
//     name: 'Raghu Bandaru',
//     age: 28,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: true,
//     location: {
//         city: 'Hyderabad',
//         country: 'India'
//     }
// }).then(() => {
//     console.log('Data is saved.');
// }).catch((error) => {
//     console.log(error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Chennai'
// }).then(() => {
//     console.log('Specified data is updated.');
// }).catch((error) => {
//     console.log(error);
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Delhi'
// });

// database.ref().update({
//     name: 'Naveen Kumar',
//     age: 27,
//     isSingle: null
// });

// database.ref('isSingle').remove()
//     .then(() => {
//         console.log('isSingle value is successfully removed!');
//     }).catch((error) => {
//         console.log('Something went wrong in removing!', error);
//     });


