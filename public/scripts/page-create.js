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

let marker

// Cria marcadores
map.on('click', event => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    marker && map.removeLayer(marker)

    marker = L.marker([lat, lng], {icon}).addTo(map)
})

// Adicionar Campo de Fotos
function addPhotos(){
    //Container de Fotos
    const container = document.querySelector("div#images")
    
    //Elemento a repetir
    const divsImg = document.querySelectorAll("div.new-upload")
    
    //Duplicar elemento
    const newDiv = divsImg[divsImg.length - 1].cloneNode(true)
    
    if( newDiv.children[0].value === ""){
        return
    }

    //Limpando Campo
    newDiv.children[0].value = ""

    //Adicionar ao container
    container.appendChild(newDiv)
    
}

function removePhoto(event){
    const span = event.currentTarget

    if(document.querySelectorAll("div.new-upload").length <= 1){
        span.parentNode.children[0].value = ""
        return
    }

    span.parentNode.remove()
}

function changeOption(event){
    const selections = document.querySelectorAll(".button-select button")
    const input = document.querySelector("[name=openWeekends")
    
    if(input.value == 1) input.value = 0
    else input.value = 1

    selections.forEach(item => item.classList.remove('active'))

    event.currentTarget.classList.add('active')
}