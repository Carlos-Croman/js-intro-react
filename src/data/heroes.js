const owners = ["Marvel", "DC"];

const heroes = [
  {
    id: 1,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 3,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 4,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 5,
    name: "Ironman",
    owner: "Marvel",
  },
];

/* Named export and default export */
export {
  heroes,
  owners as default,
}