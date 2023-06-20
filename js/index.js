//! SIZES aka GRÖßEN //

const sizeOutputTable = document.getElementById('sizeOutputTable');
const sizeDefaultTd = document.getElementById('sizeDefaultTd');
const sizeOptions = document.querySelectorAll('.sizeOptions');
const sizeSendInfo = document.getElementById('sizeSendInfo');
let sizeCurrentTd = null;

sizeOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {
        
        sizeOptions.forEach(function(element) {
        element.classList.remove('active');
        });
        this.classList.add('active');

        // get rid of whitespaces adding to send event
        sizeDefaultTd.textContent = this.textContent;

        const sizeDefaultTdTextContent = sizeDefaultTd.textContent.trim();
        sizeSendInfo.value = sizeDefaultTdTextContent + ' Rack';

        sizeDefaultTd.textContent = this.textContent + 'Rack';


    if (sizeCurrentTd) {
        sizeCurrentTd.replaceWith(sizeDefaultTd);
    }
    else {
        const newRow = sizeOutputTable.insertRow();
        newRow.appendChild(sizeDefaultTd);
    }
    sizeCurrentTd = sizeDefaultTd;
    });
});


//! LOCATION aka ORT //

const locationOutputTable = document.getElementById('locationOutputTable')
const locationDefaultTd = document.getElementById('locationDefaultTd');
const locationOptions = document.querySelectorAll('.locationOptions');
const locationSendInfo = document.getElementById('locationSendInfo');
let locationCurrentTd = null;

locationOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {

        // show choosen Option 
        locationOptions.forEach(function(element) {
            element.classList.remove('active');
        });
        this.classList.add('active');

        locationDefaultTd.textContent = this.textContent;

        const locationDefaultTdTextContent = locationDefaultTd.textContent.trim();
        locationSendInfo.value = locationDefaultTdTextContent;
    
    //
    if (locationCurrentTd) {
        locationCurrentTd.replaceWith(locationDefaultTd);
    }
    else {
        const newRow = locationOutputTable.insertRow();
        newRow.appendChild(locationDefaultTd);
    }
    locationCurrentTd = locationDefaultTd;
    });
});


//! UPLINKS //

window.addEventListener("DOMContentLoaded", () => {
    const uplinksDefaultTd = document.getElementById('uplinksDefaultTd');
    const uplinksPlusOption = document.getElementById('uplinksPlusOption');
    const uplinksMinusOption = document.getElementById('uplinksMinusOption');
    const uplinksSendInfo = document.getElementById('uplinksSendInfo');
    let uplinksCount = 1;

    const uplinksCounterUpdate = () => {
        uplinksDefaultTd.textContent = uplinksCount + ' Uplink(s)'
        uplinksSendInfo.value = uplinksCount + ' Uplink(s)'
        };

    if (uplinksPlusOption) {
        uplinksPlusOption.addEventListener('click', () => {
            uplinksMinusOption.disabled = false;
            uplinksCount++;
            uplinksCounterUpdate()
        })};
    
    if (uplinksMinusOption) {
        uplinksMinusOption.addEventListener('click', () => {
            uplinksCount--;
            uplinksCounterUpdate()
        if (uplinksCount === 0) {
            uplinksMinusOption.disabled = true;
        }
        })};

});


//! REMOTEHAND SERVICE PAKET //

window.addEventListener("DOMContentLoaded", () => {
    const rspOptions = document.querySelectorAll('.rspOptions');
    const rspNoOption = document.getElementById('rspNoOption');
    const rspYesOption = document.getElementById('rspYesOption');
    const rspDefaultTd = document.getElementById('rspDefaultTd');
    const rspSendInfo = document.getElementById('rspSendInfo');
    
    rspOptions.forEach(function(element) {
        element.addEventListener('click', function(e) {
            
            rspOptions.forEach(function(element) {
                element.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    if (rspYesOption) {
        rspYesOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'ohne Remote Service Paket';
            rspSendInfo.value = 'ohne Remote Service Paket';
    })};

    if (rspNoOption) {
        rspNoOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'mit Remote Service Paket';
            rspSendInfo.value = 'mit Remote Service Paket';
    })};
});


//! SEND BUTTON //

window.addEventListener("DOMContentLoaded", () => {
    const sendOpenButton = document.getElementById('sendOpenButton');
    const sendButtonDialog = document.getElementById('sendButtonDialog');
    const sendCloseButton = document.getElementById('sendCloseButton');

    if (sendOpenButton) {
        sendOpenButton.addEventListener('click', () => {
            sendButtonDialog.showModal();
        })};
    
    if (sendCloseButton) {
        sendCloseButton.addEventListener('click', () => {
            sendButtonDialog.close();
        })};
    
});

//todo error handling
//todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari
//todo styles.css