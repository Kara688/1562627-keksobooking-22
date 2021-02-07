'use strict'
function getRandomInteger (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random () * (max - min + 1);
  return Math.round (rand);
}

console.log(getRandomInteger (1, 3) );

 // (https://learn.javascript.ru/task/random-int-min-max)

function getRandomFloat( from, to, decimal = 2) {
  if (to > from && from >= 0) {
    return + (Math.random() * (to - from) + from).toFixed (decimal)
  }
}


const types = ['flat', 'bungalow', 'palace']
const MIN_PRICE = 1
const MAX_PRICE = 10000

const getRandomOffer = () => {
  return {
    offer: {
     type:
     types[Math.floor(Math.random()*types.length)];

     price:

     if (MIN_PRICE > MAX_PRICE && MAX_PRICE >= 0) {
      return + (Math.random() * (MIN_PRICE - MAX_PRICE) + MAX_PRICE).toFixed(3)
    }
    }

    }
  }
}
