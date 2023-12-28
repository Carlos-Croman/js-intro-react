/* Ternary operator */
const isUserActive = true;

/* Is a "shorthand" for if-else statement */
const message = isUserActive ? 'User is active' : 'User is not active';
const canViewCatalog = isUserActive && 'You can wiew the catalog'; // 'and' operator

console.log(message);
console.log(canViewCatalog);