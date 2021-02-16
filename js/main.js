'use strict'
import {getRandomInteger, getRandomFloat, getRandomElement, getRandomNumberBetween} from './util.js';

const types = ['palace', 'flat', 'house', 'bungalow']
const checks = ['12:00', '13:00', '14:00']
const titles = ['двухместный номер', 'трёхместный номер', 'номер кинг сайз']
const rooms =  [25, 30, 45 ]
const guests = [2, 1]
const x = (35.65000, 35.70000)
const y = (139.70000, 139.80000)


const offer = {
  author: {
    avatar:'img/avatars/user01.png'
  },
  offer: {
    title:  getRandomElement(title),
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
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
  },
  location: {
    x: getRandomNumberBetween(x),
    y: getRandomNumberBetween(y)
  }

}
console.log(offer);



