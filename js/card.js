function renderIt() {
 let offersContent = document.querySelector('#card');
 let clone = offersContent.textContent.clodeNode(true);

  h3.querySelector("popup_title").textContent = offer.offer.tittle;
  p.querySelector("").textContent = offer.offer.price;
  h4.querySelector("popup__type").textContent = offer.offer.type;
  li.querySelector("popup__feature popup__feature--wifi").textContent = offer.offer.feature.wifi;
  li.querySelector("popup__feature popup__feature--dishwasher").textContent = offer.offer.feature.dishwasher;
  li.querySelector("popup__feature popup__feature--parking").textContent = offer.offer.feature.parking;
  li.querySelector("popup__feature popup__feature--washer").textContent = offer.offer.feature.washer;
  li.querySelector("popup__feature popup__feature--elevator").textContent = offer.offer.feature.elevator;
  li.querySelector("popup__feature popup__feature--conditioner").textContent = offer.offer.feature.conditioner;

    return (renderIt);
}
