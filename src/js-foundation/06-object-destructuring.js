const hero = {
  fullname: "Tony Stark",
  character: "Iron-Man",
  owner: "Marvel",
};

/* Destructuring extract a named property on the object if exists */
const { character, owner } = hero; // if u extract an undefined property it will have the value 'undefined'

console.log(`${character} is property of ${owner}`);

const cristianoRonaldo = {
  fullname: "Cristiano Ronaldo",
  nickname: "CR7",
  team: "Al Nassr",
};

const makePlayer = function ({ fullname, nickname, team, active = true }) { // u can set a default value for parameters in a function 
  return {
    fullname,
    nickname,
    team,
    active,
    displayInfo: () => console.log(`${fullname} is playing for ${team}`),
  };
};

const newPlayer = makePlayer(cristianoRonaldo);
const { nickname } = newPlayer;
newPlayer.displayInfo();

console.log({ nickname });