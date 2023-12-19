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