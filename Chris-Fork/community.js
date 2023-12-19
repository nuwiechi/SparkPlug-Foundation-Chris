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