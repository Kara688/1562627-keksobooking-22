'use strict'
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  alert( randomInteger(1, 3) );

 // (https://learn.javascript.ru/task/random-int-min-max)
