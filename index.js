//! SIZES aka GRÖßEN //

const sizeOutputTable = document.getElementById('sizeOutputTable');
const sizeDefaultTd = document.getElementById('sizeDefaultTd');
const sizeOptions = document.querySelectorAll('.sizeOptions');
let sizeCurrentTd = null;

sizeOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {
        
        sizeOptions.forEach(function(element) {
        element.classList.remove('active');
        });
        this.classList.add('active');

        sizeDefaultTd.textContent = this.textContent + ' Rack';

    if (sizeCurrentTd) {
        sizeCurrentTd.replaceWith(sizeDefaultTd);
    }
    else {
        const newRow = outputTable.insertRow();
        newRow.appendChild(sizeDefaultTd);
    }
    sizeCurrentTd = sizeDefaultTd;
    });
});


//! LOCATION aka ORT //

const locationOutputTable = document.getElementById('locationOutputTable')
const locationDefaultTd = document.getElementById('locationDefaultTd');
const locationOptions = document.querySelectorAll('.locationOptions');
let locationCurrentTd = null;

locationOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {

        // show choosen Option 
        locationOptions.forEach(function(element) {
            element.classList.remove('active');
        });
        this.classList.add('active');

        locationDefaultTd.textContent = this.textContent;
    
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
    let uplinksCount = 1;

    const uplinksCounterUpdate = () => {
        uplinksDefaultTd.textContent = uplinksCount + ' Uplink(s)'
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
    })};

    if (rspNoOption) {
        rspNoOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'mit Remote Service Paket';
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