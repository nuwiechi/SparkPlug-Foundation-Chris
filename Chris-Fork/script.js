// Events
const events = [];
function addEvent() {
    const eventName = document.getElementById('eventName').value;
    const eventDetails = document.getElementById('eventDetails').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventPhoto = document.getElementById('eventPhoto').files[0];
    const eventPlace = document.getElementById('eventPlace').value;

    if (eventName && eventDetails && eventDate && eventPhoto && eventPlace) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const newEvent = {
                name: eventName,
                details: eventDetails,
                date: eventDate,
                photo: e.target.result,
                place: eventPlace
            };
            events.unshift(newEvent); 
            displayEvents();
            displayMap();
            updateEventHistory();
            resetForm();
        };
        reader.readAsDataURL(eventPhoto);
    } else {
        alert('Please enter event name, details, date, select a photo, and place/address.');
    }
}
function displayEvents() {
    const eventDisplay = document.getElementById('eventDisplay');
    eventDisplay.innerHTML = '';

    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('card', 'event-card');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = event.name;

        const cardDetails = document.createElement('p');
        cardDetails.classList.add('card-text');
        cardDetails.textContent = event.details;

        const cardDate = document.createElement('p');
        cardDate.classList.add('card-text');
        cardDate.textContent = `Date: ${event.date}`;

        const cardPlace = document.createElement('p');
        cardPlace.classList.add('card-text');
        cardPlace.textContent = `Place: ${event.place}`;

        const cardPhoto = document.createElement('img');
        cardPhoto.classList.add('card-img-top', 'mt-2');
        cardPhoto.src = event.photo;
        cardPhoto.alt = event.name;

        const removeButton = document.createElement('button');
        removeButton.classList.add('btn', 'btn-danger', 'mt-2');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeEvent(index);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDetails);
        cardBody.appendChild(cardDate);
        cardBody.appendChild(cardPlace);
        cardBody.appendChild(cardPhoto);
        cardBody.appendChild(removeButton);
        eventCard.appendChild(cardBody);

        eventDisplay.appendChild(eventCard);
    });
}
function removeEvent(index) {
    events.splice(index, 1);
    displayEvents();
    displayMap();
    updateEventHistory();
}
function resetForm() {
    document.getElementById('eventName').value = '';
    document.getElementById('eventDetails').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventPhoto').value = '';
    document.getElementById('eventPlace').value = '';
}
function displayMap() {
    const mapDiv = document.getElementById('map');

    const map = new google.maps.Map(mapDiv, {
        center: { lat: 0, lng: 0 },
        zoom: 2
    });

    events.forEach(event => {
        const geocoder = new google.maps.Geocoder();

        geocoder.geocode({ address: event.place }, (results, status) => {
            if (status === 'OK' && results[0].geometry) {
                const marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    title: event.name
                });
            } else {
                console.error('Geocode was not successful for the following reason:', status);
            }
        });
    });
}
function updateEventHistory() {
    const eventHistoryFrame = document.getElementById('eventHistory');
    const eventHistoryContent = events.map(event => `${event.date} - ${event.name} - ${event.details} - ${event.place} `).join('<br>');
    eventHistoryFrame.contentDocument.body.innerHTML = eventHistoryContent;
}


function saveFoundationSettings() {
    const foundationName = document.getElementById('foundationName').value;
    const foundationAddress = document.getElementById('foundationAddress').value;
    const contactDetails = document.getElementById('contactDetails').value;
    const socialMedia = document.getElementById('socialMedia').value;
    const websiteDetails = document.getElementById('websiteDetails').value;

    if (!foundationName || !foundationAddress || !contactDetails || !socialMedia || !websiteDetails) {
        showErrorModal('Please complete all fields.');
    } else {
        showSuccessModal('Foundation Settings saved successfully.');
    }
}

function saveThemeSettings() {
    const theme = document.getElementById('theme').value;
    showSuccessModal(`Theme set to ${theme}.`);
}

function showErrorModal(message) {
    const errorModalBody = document.getElementById('errorModalBody');
    errorModalBody.textContent = message;
    $('#errorModal').modal('show');
}

function showSuccessModal(message) {
    const successModalBody = document.getElementById('successModalBody');
    successModalBody.textContent = message;
    $('#successModal').modal('show');
}

// community

const community = [];
        function addCommunity() {
            const communityName = document.getElementById('communityName').value;
            const communityDetails = document.getElementById('communityDetails').value;
            const communityDate = document.getElementById('communityDate').value;
            const communityPhoto = document.getElementById('communityPhoto').files[0];
            const communityPlace = document.getElementById('communityPlace').value;

            if (communityName && communityDetails && communityDate && communityPhoto && communityPlace) {
                const reader = new FileReader();

                reader.onload = function (c) {
                    const newCommunity = {
                        name: communityName,
                        details: communityDetails,
                        date: communityDate,
                        photo: c.target.result,
                        place: communityPlace
                    };

                    community.push(newCommunity);
                    displayCommunity();
                    displayMap();
                    resetForm();
                };

                reader.readAsDataURL(communityPhoto);
            } else {
                alert('Please enter Community name, details, date, select a photo, and place/address.');
            }
        }
        function displayCommunity() {
            const communityDisplay = document.getElementById('communityDisplay');
            communityDisplay.innerHTML = '';

            community.forEach((community, index) => {
                const communityCard = document.createElement('div');
                communityCard.classList.add('card', 'community-card');

                const cardBody = document.createElement('div');
                cardBody.classList.add('card-body');

                const cardTitle = document.createElement('h5');
                cardTitle.classList.add('card-title');
                cardTitle.textContent = community.name;

                const cardDetails = document.createElement('p');
                cardDetails.classList.add('card-text');
                cardDetails.textContent = community.details;

                const cardDate = document.createElement('p');
                cardDate.classList.add('card-text');
                cardDate.textContent = `Date: ${community.date}`;

                const cardPlace = document.createElement('p');
                cardPlace.classList.add('card-text');
                cardPlace.textContent = `Place: ${community.place}`;

                const cardPhoto = document.createElement('img');
                cardPhoto.classList.add('card-img-top', 'mt-2');
                cardPhoto.src = community.photo;
                cardPhoto.alt = community.name;

                const removeButton = document.createElement('button');
                removeButton.classList.add('btn', 'btn-danger', 'mt-2');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => removeCommunity(index);

                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardDetails);
                cardBody.appendChild(cardDate);
                cardBody.appendChild(cardPlace);
                cardBody.appendChild(cardPhoto);
                cardBody.appendChild(removeButton);
                communityCard.appendChild(cardBody);

                communityDisplay.appendChild(communityCard);
            });
        }
        function removeCommunity(index) {
            community.splice(index, 1);
            displayCommunity();
            displayMap();
        }
        function resetForm() {
            document.getElementById('communityName').value = '';
            document.getElementById('communityDetails').value = '';
            document.getElementById('communityDate').value = '';
            document.getElementById('communityPhoto').value = '';
            document.getElementById('communityPlace').value = '';
        }

        // Partner
        const partners = [];
        function addPartner() {
        const partnerName = document.getElementById('partnerName').value;
        const partnerDetails = document.getElementById('partnerDetails').value;
        const partnerPhoto = document.getElementById('partnerPhoto').files[0];
    
        if (partnerName && partnerDetails && partnerPhoto) {
            const reader = new FileReader();
    
            reader.onload = function (e) {
                const newPartner = {
                    name: partnerName,
                    details: partnerDetails,
                    photo: e.target.result
                };
    
                partners.push(newPartner);
                displayPartners();
                resetPartnerForm();
            };
    
            reader.readAsDataURL(partnerPhoto);
        } else {
            alert('Please enter partner name, details, and select a photo.');
        }
        }
        function displayPartners() {
        const partnersDisplay = document.getElementById('partnersDisplay');
        partnersDisplay.innerHTML = '';
    
        partners.forEach((partner, index) => {
            const partnerCard = document.createElement('div');
            partnerCard.classList.add('card', 'partner-card');
    
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
    
            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = partner.name;
    
            const cardDetails = document.createElement('p');
            cardDetails.classList.add('card-text');
            cardDetails.textContent = partner.details;
    
            const cardPhoto = document.createElement('img');
            cardPhoto.classList.add('card-img-top', 'mt-2');
            cardPhoto.src = partner.photo;
            cardPhoto.alt = partner.name;
    
            const removeButton = document.createElement('button');
            removeButton.classList.add('btn', 'btn-danger', 'mt-2');
            removeButton.textContent = 'Remove';
            removeButton.onclick = () => removePartner(index);
    
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardDetails);
            cardBody.appendChild(cardPhoto);
            cardBody.appendChild(removeButton);
            partnerCard.appendChild(cardBody);
    
            partnersDisplay.appendChild(partnerCard);
        });
        }
        function removePartner(index) {
        partners.splice(index, 1);
        displayPartners();
        }
        function resetPartnerForm() {
        document.getElementById('partnerName').value = '';
        document.getElementById('partnerDetails').value = '';
        document.getElementById('partnerPhoto').value = '';
        }
        // Settings
    
        function saveFoundationSettings() {
            const foundationName = document.getElementById('foundationName').value;
            const foundationAddress = document.getElementById('foundationAddress').value;
            const contactDetails = document.getElementById('contactDetails').value;
            const socialMedia = document.getElementById('socialMedia').value;
            const websiteDetails = document.getElementById('websiteDetails').value;
        
            if (!foundationName || !foundationAddress || !contactDetails || !socialMedia || !websiteDetails) {
                showErrorModal('Please complete all fields.');
            } else {
                showSuccessModal('Foundation Settings saved successfully.');
            }
        }
        
        function saveThemeSettings() {
            const theme = document.getElementById('theme').value;
            showSuccessModal(`Theme set to ${theme}.`);
        }
        
        function showErrorModal(message) {
            const errorModalBody = document.getElementById('errorModalBody');
            errorModalBody.textContent = message;
            $('#errorModal').modal('show');
        }
        
        function showSuccessModal(message) {
            const successModalBody = document.getElementById('successModalBody');
            successModalBody.textContent = message;
            $('#successModal').modal('show');
        }