const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
//Mapa
const map = L.map('mapid', options).setView([-3.7377088,-38.5414155], 14)

//Criando e adicionando TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', ).addTo(map);

//Criando Ícone
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor:[29,68],
    popupAnchor: [170, 2]
})


//Criando Marcador
L.marker([-3.7377088,-38.5414155], { icon }).addTo(map)

//Galeria de imagens

function selectImage(event){
    const buttonEl = event.currentTarget
    
    //Remover todas as classes active
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach(item => item.classList.remove('active'))

    //Selecionar a imagem clicada
    const image = buttonEl.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img')
    
    //Atualizar o container de imagem
    imageContainer.src = image.src
    
    //Adicionar a classe active ao botao clicado
    buttonEl.classList.add('active')
}