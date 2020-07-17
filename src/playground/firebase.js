import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdCNKEd-e31e7IokEkmc-tEWbi9-I2SoE",
    authDomain: "expensify-f1c84.firebaseapp.com",
    databaseURL: "https://expensify-f1c84.firebaseio.com",
    projectId: "expensify-f1c84",
    storageBucket: "expensify-f1c84.appspot.com",
    messagingSenderId: "528383381667",
    appId: "1:528383381667:web:8776be8b62e420255eef16"
  };

firebase.initializeApp(firebaseConfig);
const database=firebase.database();


const expenses = [{
  description: 'Rent',
  note: 'first month',
  amount:10000,
  createdAt:500012
},{
  description: 'Groceries',
  note: 'first month',
  amount:2000,
  createdAt:502012
},{
  description: 'Coffee',
  note: '',
  amount:200,
  createdAt:622012
}];

// child_remove subscription
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed subscription
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added subscription
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});


//-- fetching data as array
// database.ref("expenses").on('value',(snapshot) => {
//   const expenses1 = [];
//   snapshot.forEach((childSnapshot) => {
//       expenses1.push({
//         id:childSnapshot.key,
//         ...childSnapshot.val()
//       });
//   });
//   console.log(expenses1);
// });


//--fetching data --

// database.ref()
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((error) => {
//   console.log("Error:",error)
// });

// -- or -- subscribing
// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// })
// setTimeout(() => {
//   database.ref('age').set(29)
// }, 3500);
// setTimeout(() => {
//   database.ref().off();
// }, 7000);
// setTimeout(() => {
//   database.ref('age').set(30)
// }, 10500);

// database.ref().on('value',(snapshot)=>{
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });


// //ref: is reference we want to change if we don't pass any
// // referance referance is made to root by default
// database.ref().set({
//     name: 'Rahul Gampa',
//     age:21,
//     stressLevel:6,
//     job: {
//       title:'SDE',
//       company:'Google'
//     },
//     location: {
//       city:"Hyderabad",
//       country:"India"
//     }
// }).then(() => {
//   console.log("Saved data successfully!")
// }).catch((error) => {
//   console.log("Error:",error)
// });

// // --deleting--
// // database.ref('isSingle').set(null);
// // --or--
// // database.ref().remove().then(() =>{
// //   console.log("Deleted Succesfully!")
// // }).catch((error) => {
// //   console.log("Error:", error);
// // });

// //--update--
// database.ref().update({
//   stressLevel:9,
//   'job/company':'amazon'
// });

