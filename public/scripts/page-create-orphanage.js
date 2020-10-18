// Create MAP

const map = L.map("mapid").setView([-25.4538603,-49.2568671], 15);

// Create and add tilelayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create Icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

let marker;

// Create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon layer

    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// Add photo fields

function addPhotoField() {
    // Get photos container #images
    const container = document.querySelector('#images')

    // Get the container to duplicate .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Make the clone fo the last image added.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Check if the field is empty, if true, don't add to image container
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }
    // Clear the field before adding to container of images
    input.value = ""

    // Add the clone to the container of #image.
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelector('.new-upload')

    if(fieldsContainer.length <= 1) {
        // Clear the value of the field
        span.parentNode.children[0].value = ""
        return
    }

    // Delete the field
    span.parentNode.remove();
}

// Select yes or no
function toggleSelect(event) {

    // Remove class .active of buttons
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    // Put class .active on clicked button
    const button = event.currentTarget
    button.classList.add('active')

    // Update the hidden input with the value selected
    const input = document.querySelector('[name="open_on_weekends"]')
    
    // Check if yes or no
    input.value = button.dataset.value
}