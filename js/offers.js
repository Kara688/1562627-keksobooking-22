import {types, checks, titles, rooms, guests} from './data.js'
import {getRandomElement, getRandomInteger} from './utils.js'

function createOffers() {
  let array = []
  for(let i = 0; i <= 10; i++) {

    const offer = {
      author: {
        avatar: 'img/avatars/user0' + i +'.png',
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

export{createOffers}

