;(function() {
    if (typeof ymaps === 'undefined') {
        return;
    }
    ymaps.ready(function() {
        var myMap = new ymaps.Map('ymap', {
                center: [47.226288, 39.750496],
                zoom: 15
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContent: 'г. Ростов-на-Дону, ул. Закруткина, 68'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/common/marker.svg',
                iconImageSize: [40, 63.2],
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });
})();