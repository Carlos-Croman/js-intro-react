const person = {
  address: {
    city: "Ajalpan",
    country: 'Mexico',
    state: "Puebla",
    zip: 75910,
  },
  age: 23,
  first: "Stark",
  last: "Supreme",
};

/* to clone an object use spread operator (or structuredClone for deep clone) which works well if values in the object are primitives and for 1st level of values */
const dev = structuredClone( person );
dev.address.city = "Tehuacan"; // to change the value of <x> property use the assignment operator plus the new value
dev.address.zip = 75700;

console.log({ person });
console.log({ dev });