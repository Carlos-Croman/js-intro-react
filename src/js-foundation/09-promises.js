import { getHeroByID } from "./08-import-export";

/* Promises represents success or fail of an async operation */
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroByID(1);

    if (!hero) {
      reject("Hero not found");
    }

    resolve(hero);
  }, 2000);
});

promise
  .then((hero) => console.log({ hero }))
  .catch((error) => console.error({ error }));

const getHeroByIDAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroByID(id);
  
      if (!hero) {
        reject('Hero not found');
      }
  
      resolve(hero);
    }, 1000);
  })
}

getHeroByIDAsync(2)
  .then((hero) => console.log({ hero }))
  .catch((error) => console.error({ error }));