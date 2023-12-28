/* Function declaration */
function greeting() {
  return "Hello, world";
}

/* Function expression */
const getUser = function () {
  return {
    id: 'ABC123',
    username: "CromanDev",
  };
};

/* Function expression (with arrow function) */
const whoAmI = (fullname) => `I'm ${fullname}`; 

const greet = greeting();
const user = getUser();
const iAm = whoAmI("Carlos");

console.log(greet);
console.log(user);
console.log(iAm);

/* TODO: transform the following function declaration to arrow function expression */
function getActiveUser(id) {
  return {
    id,
    username: "UserABC123",
  }
}

const getActiveUser2 = (id) => ({ id, username: "UserABC123", });

const userActive = getActiveUser(1);
const userActive2 = getActiveUser2(2);

console.log(userActive);
console.log(userActive2);