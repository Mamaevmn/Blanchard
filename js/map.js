ymaps.ready(init);

function init() {
  // Создание карты.
  let myMap = new ymaps.Map("map", {
    center: [55.758463, 37.601079],
    zoom: 14,
    controls: ['zoomControl', 'geolocationControl']
  });

  let myGeoObject = new ymaps.GeoObject({
    geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.758463, 37.601079] // координаты точки
    },
  });

  let myPlacemark = new ymaps.Placemark(
    [55.758463, 37.601079], {
      hintContent: ['<div class="feedback__map-hint">Леонтьевский переулок, дом 5, строение 1</div>'],
      balloonContent: [
        '<div class="feedback__map-baloon">',
        '<img class="logo-img" src="image/logo/logo.svg">',
        '<div>Шоурум №4</div>',
        '<span>Адрес: Леонтьевский переулок, дом 5, строение 1</span>',
        '</div>'
    ].join('')
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'image/mapmark/placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -20],
      preset: 'islands#redDotIcon'
  });

  myMap.geoObjects.add(myPlacemark); 
}
