function markOptionActive(elementClicked) {
    elementClicked.classList.add('active');
};


function unmarkAllOptions(elementsOption) {
    elementsOption.forEach(function(elementClicked) {
        elementClicked.classList.remove('active')
    });
};


function updateOutput(elementClicked, elementShownValue) {
    let newValue = elementClicked.textContent.trim();
    
    elementShownValue.value = newValue;
};


function updateOutputPlusButton(elementShownValue, elementMinusOption) {
    elementMinusOption.disabled = false;

    let currentValue = parseInt(elementShownValue.value);
    currentValue++;
    
    elementShownValue.value = currentValue;
};

function updateOutputMinusButton(elementShownValue, elementMinusOption) {   
    let currentValue = parseInt(elementShownValue.value);

    console.log(currentValue)

    let newValue = currentValue - 1;

    if (newValue === 0) {
        elementMinusOption.disabled = true;
    };
    
    elementShownValue.value = newValue;
}




//! SIZES aka GRÖßEN //


const sizeShownValue = document.getElementById('sizeValue');
const sizeOptions = document.querySelectorAll('.sizeOptions');

sizeOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(sizeOptions);

        markOptionActive(option);

        updateOutput(option, sizeShownValue);
    });
});


//! LOCATION aka ORT //

const locationValue = document.getElementById('locationValue')
const locationOptions = document.querySelectorAll('.locationOptions');

locationOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(locationOptions);

        markOptionActive(option);

        updateOutput(option, locationValue);
    });
});


//! UPLINKS //

const uplinksValue = document.getElementById('uplinksValue');
const uplinksPlusOption = document.getElementById('uplinksPlusOption');
const uplinksMinusOption = document.getElementById('uplinksMinusOption');

uplinksPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(uplinksValue, uplinksMinusOption);
});

uplinksMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(uplinksValue, uplinksMinusOption);
});


//! Cross Connects //

const ccValue = document.getElementById('ccValue');
const ccPlusOption = document.getElementById('ccPlusOption');
const ccMinusOption = document.getElementById('ccMinusOption');

ccPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(ccValue, ccMinusOption);
});

ccMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(ccValue, ccMinusOption);
});


//! REMOTEHAND SERVICE PAKET //

const rspOptions = document.querySelectorAll('.rspOptions');
const rspValue = document.getElementById('rspValue');

rspOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(rspOptions);

        markOptionActive(option);

        updateOutput(option, rspValue);
    });
});


//! Electricity Feeds //

const efValue = document.getElementById('efValue');
const efPlusOption = document.getElementById('efPlusOption');
const efMinusOption = document.getElementById('efMinusOption');

efPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(efValue, efMinusOption);
});

efMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(efValue, efMinusOption);
});


//! SEND BUTTON //

// const submitButton = document.getElementById('submitButton');
// NEXTPAGE_URL = "http://localhost:5500/html/index.html";

// if (submitButton) {
//     submitButton.addEventListener('click', () => {
//         location.href = NEXTPAGE_URL;
//     })
// };






// todo add pricing

// todo style.css for when in handy size: first options, rack  pic, output

// todo tests, documentation, error handling

//todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari

// todo extra field for special things, controll what can be writen in it?

// todo customer infos integrieren (formData.append)

// todo spam schutz?

// todo api_post.js: customer_id: user ID/ user login/ user email -> changing if customer needs to be created

// principles angewendet: reusability, naming conventions, dry, modularity, single responsibility principle