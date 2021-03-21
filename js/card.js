const renderAd = (adData) => {
  const offers = offerTemplate.cloneNode(true);
  ad.querySelecor('.popup__title').textConent = adData.offer.title;
  ad.querySelecor('.popup__text-address').textConent = adData.offer.address;
  ad.querySelecor('.popup__text--price').innerHTML = adData.offer.price;
  ad.querySelecor('.popup__type').textConent = adData.offer.type

  return renderAd
}

