// Object Destructuring
const person = {
    name: 'Raghu',
    age: 28,

    location: {
        city: 'Hyderabad',
        temp: 38
    }
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if(city && temperature) {
    console.log(`It's ${temperature} degree celsius in ${city}`);
}

const book = {
    title: 'The LEAN Startup',
    author: 'Eric Ries',

    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName ="Self-employed" } = book.publisher;
console.log(publisherName); 

// Array Destructuring
const address = ['8-1-34', 'Teachers colony', 'Mahabubnagar', 'Telangana'];
const [, street, town, state ] = address;

console.log(`You are in ${town} ${state}.`);

const item = ['Coffee', '10usd', '15usd', '20usd'];
const [itemName, , mediumPrice] = item;

console.log(`Medium ${itemName} costs ${mediumPrice}`);