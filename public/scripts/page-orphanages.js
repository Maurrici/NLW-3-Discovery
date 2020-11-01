//Mapa
const map = L.map('mapid').setView([-3.7377088,-38.5414155], 14)

//Criando e adicionando TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//Criando Ícone
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170, 2]
})

function renderOrphanages({id, name, lat, lng}){
    //Criando PopUp
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="images/arrow-white.svg"></a>`)

    //Criando Marcador
    L.marker([lat,lng], { icon })
        .addTo(map)
        .bindPopup(popup)
}

const orphanages = document.querySelectorAll('.orphanages span')

orphanages.forEach(item => {
    const orphanage = {
        id: item.dataset.id,
        name: item.dataset.name,
        lat: item.dataset.lat,
        lng: item.dataset.lng,
    }

    renderOrphanages(orphanage)
})