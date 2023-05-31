//! highlight choosen option and add value to output table
//! SIZES aka GRÖßEN

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


//! LOCATION aka ORT

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


//! UPLINKS
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
            uplinksCount++;
            uplinksCounterUpdate()
        })};

    if (uplinksMinusOption) {
        uplinksMinusOption.addEventListener('click', () => {
            uplinksCount--;
            uplinksCounterUpdate()
        })};
});

//! REMOTEHAND SERVICE PAKET
window.addEventListener("DOMContentLoaded", () => {
    const rspDefaultTd = document.getElementById('rspDefaultTd');
    const rspNoOption = document.getElementById('rspNoOption');
    const rspYesOption = document.getElementById('rspYesOption');

    if (rspYesOption) {
        rspYesOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'ohne Remote Service Paket';
    })};

    if (rspNoOption) {
        rspNoOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'mit Remote Service Paket';
    })};
});