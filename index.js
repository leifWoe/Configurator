//! highlight choosen option and add value to output table
//! SIZES aka GRÖßEN
const sizeOutputTable = document.getElementById('sizeOutputTable');
const sizeOptions = document.querySelectorAll('.sizeOptions');
const sizeDefaultTd = document.getElementById('sizeDefaultTd');
let currentSizeTd = null;

sizeOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {
        
        sizeOptions.forEach(function(element) {
        element.classList.remove('active');
        });
        this.classList.add('active');

        sizeDefaultTd.textContent = this.textContent + ' Rack';

        if (currentSizeTd) {
            currentSizeTd.replaceWith(sizeDefaultTd);
        }
        else {
            const newRow = outputTable.insertRow();
            newRow.appendChild(sizeDefaultTd);
        }
        currentSizeTd = sizeDefaultTd;
    });
});

//! LOCATION aka ORT
const locationOutputTable = document.getElementById('locationOutputTable')
const locationOptions = document.querySelectorAll('.locationOptions');
const locationDefaultTd = document.getElementById('locationDefaultTd');
let currentLocationTd = null;

locationOptions.forEach(function(element) {
    element.addEventListener('click', function(e) {

        locationOptions.forEach(function(element) {
            element.classList.remove('active');
        });
        this.classList.add('active');

        locationDefaultTd.textContent = this.textContent;

        if (currentLocationTd) {
            currentLocationTd.replaceWith(locationDefaultTd);
        }
        else {
            const newRow = locationOutputTable.insertRow();
            newRow.appendChild(locationDefaultTd);
        }
        currentLocationTd = locationDefaultTd;
    });
});

//! UPLINKS
const uplinksOutputTable = document.getElementById('uplinksOutputTable');
const  = ;