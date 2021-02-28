function getRandomInteger (min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random () * (max - min + 1);
  return Math.round (rand);
}
// (https://learn.javascript.ru/task/random-int-min-max)

function getRandomFloat( from, to, decimal = 2) {
  if (to > from && from >= 0) {
    return + (Math.random() * (to - from) + from).toFixed (decimal)
  }
}
function getRandomElement(items) {
// "|" for a kinda "int div"
  return items[items.length * Math.random() | 0];
}

function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


export {getRandomElement, getRandomInteger, getRandomFloat };


