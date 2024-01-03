const fullname = "Carlos Castro Roman";
const degree = "Computer Systems Engineer";

export function greet(name) {
  return `Hi, ${name}`;
}

export function presentation({ fullname, degree }) {
  // string template allows interpolating strings with javascript expressions or variables
  return `Hi, i'm ${fullname}, and i'm a ${degree}.`;
}

// console.log(presentation({ fullname, degree }));