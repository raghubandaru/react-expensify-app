console.log('person.js is running');

export const isAdult = (age) => age >= 18 ? 'Given age is adult' : 'Not adult yet!';
export const canDrink = (age) => age >= 21 ? 'Given age is eligible to drink' : 'Not allowed to drink yet!';
export default (age) => age >= 65 ? 'Yes senior citizen' : 'Not senior citizen yet!';