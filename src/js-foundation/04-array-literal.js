/* Array can also be defined using constructor: 'new Array()' */
const skills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "GIT"];
const skillsTarget = [ ...skills, "NODEJS", "PHP", "LARAVEL"]; // use structuredClone for make a deep copy

skillsTarget.push("FLUTTER");

console.log(skills);
console.log(skillsTarget);