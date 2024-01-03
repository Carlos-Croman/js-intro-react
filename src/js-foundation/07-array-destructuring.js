const characters = ["Goku", "Vegeta", "Gohan"];

/* array destructuring is performed by indexes (u have to put a comma to ignore a position in the array) */
const [, vegeta] = characters; // the first position is ignored an the second "extracted" 

// console.log({ vegeta });


export const cristianoRonaldoNicknames = () => ["CR7", "El Bicho", "GOAT"];

const [nickname1, nickname2] = cristianoRonaldoNicknames();

// console.log(nickname1, nickname2);

export const greeting = (name) => {
  return [name, () => console.log(`Hi, ${name}`)];
}

const [fullname, setGreeting] = greeting("Croman");

// console.log(fullname);
// setGreeting();