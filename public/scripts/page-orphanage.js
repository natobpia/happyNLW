const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create MAP

const map = L.map("mapid", options).setView([-25.4538603,-49.2568671], 15);

// Create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Create and add marker

L.marker([-25.4538603,-49.2568671], { icon }).addTo(map)

/* Image gallery */

function selectImage(event) {
    const button = event.currentTarget

    // Remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove('active')
    })

    // Selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")   

    // Atualizar o container de image
    imageContainer.src = image.src

    // Adicionar a classe .active para este botão
    button.classList.add('active')
}