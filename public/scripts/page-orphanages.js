//Mapa
const map = L.map('mapid').setView([-3.7377088,-38.5414155], 14)

//Criando e adicionando TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//Criando Ícone
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170, 2]
})

//Criando PopUp
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

//Criando Marcador
L.marker([-3.7377088,-38.5414155], { icon })
    .addTo(map)
    .bindPopup(popup)
    