// constant doesnt changes it value in runtime
const fullname = "Carlos Castro";
// let variables can be reasigned in runtime
let course = "React (Hooks & MERN)"; 

console.log(`${fullname} is taking the course: ${course}`);

/* Both keyword create a block scope variable/constant */
if (true) {
  /* Constants and variables declared here, exists in this scope only */
  const position = "Full-Stack developer";
  let age = 23;

  console.log(`I'm ${age} years old, and i'm a ${position}`);
}

let age = 24;

console.log(`In April 2024 i will be ${age} years old`);