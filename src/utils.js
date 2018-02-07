console.log('utils.js is running!');

// export can also be used before variable declaration but not export default
export const square = (x) => x * x;
export const add = (a, b) => a + b;
export default (a, b) => a - b;

// const subtract = (a, b) => a - b;
// export default subtract;

// default export and named export
// export { square, add, subtract as default };