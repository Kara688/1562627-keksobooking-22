import(./js/data.js)



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
function getRandomElement(items) {
// "|" for a kinda "int div"
  return items[items.length * Math.random() | 0];
}

function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}


function CreateOffer() {
  let array = []
  for(let i = 0; i <= 10; i++) {

    const offer = {
      author: {
        avatar: 'img/avatars/user01.png',
      },
      offer: {
        title:  getRandomElement(titles),
        address: '100, 200',
        price: getRandomInteger(10, 100),
        type: getRandomElement(types),
        rooms: getRandomElement(rooms),
        guests: getRandomElement(guests),
        checkin: getRandomElement(checks),
        checkout: getRandomElement(checks),
        features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        description: 'small',
        photos: [
          'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
          'http://o0.github.io/assets/images/tokyo/hotel3.jpg'],
      },
      location: {
        x: getRandomFloat (35.65000, 35.70000),
        y: getRandomFloat(139.70000, 139.80000),
      },

    }



    array[i] = offer


  }

  return array;

}

let offers = CreateOffer();

import(./data.js)

export(.util.js)
