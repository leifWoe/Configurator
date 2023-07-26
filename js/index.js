function markOptionActive(elementClicked) {
    elementClicked.classList.add('active');
};


function unmarkAllOptions(elementsOption) {
    elementsOption.forEach(function(e) {
        e.classList.remove('active')
    });
};


function updateOutput(elementClicked, elementShownValue) {
    let newValue = elementClicked.textContent.trim();
    
    elementShownValue.value = newValue;
};


function updateOutputPlusButton(elementMinusOption, elementShownValue) {
    elementMinusOption.disabled = false;

    let currentValue = parseInt(elementShownValue.value);
    currentValue++;
    
    elementShownValue.value = currentValue;
};

function updateOutputMinusButton(elementMinusOption, elementShownValue) {   
    let currentValue = parseInt(elementShownValue.value);

    let newValue = currentValue - 1;

    if (newValue === 0) {
        elementMinusOption.disabled = true;
    };
    
    elementShownValue.value = newValue;
}

function updateTotalCost(elementOptions) {
    // get all option monthly prices , add them
    // get true or false values for setup costs , add them
};

function updateOptionChoicePrice(option, elementOptions, optionPrices, elementOptionMontlyPrice) {
    var elementOptionsTextContent = [];

    for (var i = 0; i < elementOptions.length; i++) {
        elementOptionsTextContent.push(elementOptions[i].textContent.trim());
    };

    const elementPricesMap = new Map();
    
    for (var i = 0; i < elementOptionsTextContent.length; i++) {
        elementPricesMap.set(elementOptionsTextContent[i], optionPrices[i]);
    };

    elementOptionMontlyPrice.textContent = elementPricesMap.get(option.textContent.trim());
};


function updateOptionIncrementalPrice(elementShownValue, optionPrice, elementOptionMontlyPrice) {
    elementOptionMontlyPrice.textContent = elementShownValue.value*optionPrice;
};





//! SIZES aka GRÖßEN //

const sizeShownValue = document.getElementById('sizeValue');
const sizeOptionMonthlyPrice = document.getElementById('sizeOptionMonthlyPrice');
const sizeOptions = document.querySelectorAll('.sizeOptions');
const sizePrices = [650,420,260]

sizeOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        unmarkAllOptions(sizeOptions);

        markOptionActive(option);

        updateOutput(option, sizeShownValue);

        updateOptionChoicePrice(option, sizeOptions, sizePrices, sizeOptionMonthlyPrice);
    });
});


//! LOCATION aka ORT //

const locationValue = document.getElementById('locationValue');
const locationOptionMonthlyPrice = document.getElementById('locationOptionMonthlyPrice');
const locationOptions = document.querySelectorAll('.locationOptions');
const locationPrices = [50,0];

locationOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        unmarkAllOptions(locationOptions);

        markOptionActive(option);

        updateOutput(option, locationValue);

        updateOptionChoicePrice(option, locationOptions, locationPrices, locationOptionMonthlyPrice)
    });
});


//! UPLINKS //

const uplinksValue = document.getElementById('uplinksValue');
const uplinksPlusOption = document.getElementById('uplinksPlusOption');
const uplinksMinusOption = document.getElementById('uplinksMinusOption');
const uplinksOptionMonthlyPrice = document.getElementById('uplinksOptionMonthlyPrice');
const uplinksPrice = 12;

uplinksPlusOption.addEventListener('click', () => {
    updateOutputPlusButton(uplinksMinusOption, uplinksValue);

    updateOptionIncrementalPrice(uplinksValue, uplinksPrice, uplinksOptionMonthlyPrice);
});

uplinksMinusOption.addEventListener('click', () => {
    updateOutputMinusButton(uplinksMinusOption, uplinksValue, );

    updateOptionIncrementalPrice(uplinksValue, uplinksPrice, uplinksOptionMonthlyPrice);
});


//! Cross Connects //

const ccValue = document.getElementById('ccValue');
const ccPlusOption = document.getElementById('ccPlusOption');
const ccMinusOption = document.getElementById('ccMinusOption');

ccPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(ccMinusOption, ccValue, );
});

ccMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(ccMinusOption, ccValue, );
});


//! REMOTEHAND SERVICE PAKET //

const rspValue = document.getElementById('rspValue');
const rspOptionMonthlyPrice = document.getElementById('rspOptionMonthlyPrice');
const rspOptions = document.querySelectorAll('.rspOptions');
const rspPrices = [50,0];

rspOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(rspOptions);

        markOptionActive(option);

        updateOutput(option, rspValue);

        updateOptionChoicePrice(option, rspOptions, rspPrices, rspOptionMonthlyPrice)
    });
});


//! Electricity Feeds //

const efValue = document.getElementById('efValue');
const efPlusOption = document.getElementById('efPlusOption');
const efMinusOption = document.getElementById('efMinusOption');

efPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(efMinusOption, efValue);
});

efMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(efMinusOption, efValue);
});


//! SEND BUTTON //

const submitButton = document.getElementById('submitButton');
NEXTPAGE_URL = "http://localhost:5500/html/index.html";

if (submitButton) {
    submitButton.addEventListener('click', () => {
        location.href = NEXTPAGE_URL;
    })
};






// todo add pricing
// todo query selector in array to (switch)match array position with price array 
// quelle zip function: https://stackoverflow.com/questions/32937181/javascript-es6-map-multiple-arrays

// todo style.css for when in handy size: first options, rack  pic, output

// todo tests, documentation
//      principles angewendet: reusability, naming conventions, dry, modularity, single responsibility principle
// todo spam schutz?
// todo error handling

// todo extra field for special things, controll what can be writen in it?

// todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari

// todo design patterns for how scripts work together

// todo customer infos integrieren (formData.append)
// todo api_post.js: customer_id: user ID/ user login/ user email -> changing if customer needs to be created

