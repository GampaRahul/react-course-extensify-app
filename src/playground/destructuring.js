/* OBJECT DESTRUCTURING */

// const person = {
//     name: 'Rahul',
//     age: 22,
//     location:{
//         city: 'Hyderabad',
//         temp: 38
//     }
// };



// //console.log(`${person.name} is ${person.age}`);

// //Instead of traversing to the object properties again and again

// // const name = person.name;
// // const age = person.age;

// // console.log(`${name} is ${age}`);


// //object destructuring
// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}`);

// const {city, temp:temparature} = person.location;
// if(city && temparature){
//     console.log(`It is ${temparature} is ${city}`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name : publisherName = 'self-published'} = book.publisher;

console.log(publisherName);


/* BOOK DESTRUCTURIN */

const address = ['109 dayakamal towers', 'hyderabad','telangana', '500015'];

// console.log(`You are in ${address[1]} ${address[2]}`);

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}`);

const [/*fisrt item skipped */, MyCity, Mystate = 'Delhi', /*fourth item skipped */] = address;
console.log(`You are in ${MyCity} ${Mystate}`);

const item = ['Coffee (hot)' , '$2.00', '$2.50', '$2.75'];

const [name,,medium] = item;

console.log(`A medium ${name} costs ${medium} `)