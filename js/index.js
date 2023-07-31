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

function getQuerySelektorTextContents(queryNodes) {
    let elementTextContents = [];

    for (let i = 0; i < queryNodes.length; i++) {
        elementTextContents.push(queryNodes[i].textContent.trim());
    };

    return elementTextContents;
};

function gettextContentValues(textContent) {
    var textContentsValues = textContent.map(str => Number(str));
    
    return textContentsValues;
};

function sumArrayValues(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);

    return sum;
};
  

function updateTotalMonthlyCost() {
    const monthlyPriceNodes = document.querySelectorAll('.monthlyPrice');
    const totalMonthlyCost = document.getElementById('totalMonthlyCost');
   
    const monthlyCostsTextContent = getQuerySelektorTextContents(monthlyPriceNodes);
    
    const monthlyCostsValues = gettextContentValues(monthlyCostsTextContent);
    

    totalMonthlyCost.value = sumArrayValues(monthlyCostsValues);
};

function updateTotalSetupCost() {
    const setupPriceNodes = document.querySelectorAll('.monthlyPrice');
    const totalSetupCost = document.getElementById('totalSetupCost');

    const setupCostsTextContent = getQuerySelektorTextContents(setupPriceNodes);
    
    const setupCostsValues = gettextContentValues(setupCostsTextContent);
    setupCostsValues[3] = (setupCostsValues[3]/50) * 200; // increase total setup cost by single setup cost instead of monthly cost
    setupCostsValues[5] = (setupCostsValues[5]/40) * 200;

    totalSetupCost.value = sumArrayValues(setupCostsValues);
};

function updateOptionChoicePrice(option, elementOptions, optionPrices, elementOptionMontlyPrice) {
    let elementOptionsTextContent = getQuerySelektorTextContents(elementOptions);

    const elementPricesMap = new Map();
    
    for (let i = 0; i < elementOptionsTextContent.length; i++) {
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
const sizeMonthlyPrices = [650,420,260]

sizeOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        unmarkAllOptions(sizeOptions);

        markOptionActive(option);

        updateOutput(option, sizeShownValue);

        updateOptionChoicePrice(option, sizeOptions, sizeMonthlyPrices, sizeOptionMonthlyPrice);
    
        updateTotalMonthlyCost();

        updateTotalSetupCost();
    });
});


//! LOCATION aka ORT //

const locationValue = document.getElementById('locationValue');
const locationOptionMonthlyPrice = document.getElementById('locationOptionMonthlyPrice');
const locationOptions = document.querySelectorAll('.locationOptions');
const locationMonthlyPrices = [50,0];

locationOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        unmarkAllOptions(locationOptions);

        markOptionActive(option);

        updateOutput(option, locationValue);

        updateOptionChoicePrice(option, locationOptions, locationMonthlyPrices, locationOptionMonthlyPrice)
    
        updateTotalMonthlyCost();

        updateTotalSetupCost();
    });
});


//! UPLINKS //

const uplinksValue = document.getElementById('uplinksValue');
const uplinksOptionMonthlyPrice = document.getElementById('uplinksOptionMonthlyPrice');
const uplinksPlusOption = document.getElementById('uplinksPlusOption');
const uplinksMinusOption = document.getElementById('uplinksMinusOption');
const uplinksMonthlyPrice = 12;

uplinksPlusOption.addEventListener('click', () => {
    updateOutputPlusButton(uplinksMinusOption, uplinksValue);

    updateOptionIncrementalPrice(uplinksValue, uplinksMonthlyPrice, uplinksOptionMonthlyPrice);

    updateTotalMonthlyCost();

    updateTotalSetupCost();
});

uplinksMinusOption.addEventListener('click', () => {
    updateOutputMinusButton(uplinksMinusOption, uplinksValue, );

    updateOptionIncrementalPrice(uplinksValue, uplinksMonthlyPrice, uplinksOptionMonthlyPrice);

    updateTotalMonthlyCost();

    updateTotalSetupCost();
});


//! Cross Connects //

const ccValue = document.getElementById('ccValue');
const ccOptionMonthlyPrice = document.getElementById('ccOptionMonthlyPrice');
const ccPlusOption = document.getElementById('ccPlusOption');
const ccMinusOption = document.getElementById('ccMinusOption');
const ccMonthlyPrice = 50;

ccPlusOption.addEventListener('click', () => {
    updateOutputPlusButton(ccMinusOption, ccValue);

    updateOptionIncrementalPrice(ccValue, ccMonthlyPrice, ccOptionMonthlyPrice);

    updateTotalMonthlyCost();

    updateTotalSetupCost();
});

ccMinusOption.addEventListener('click', () => {
    updateOutputMinusButton(ccMinusOption, ccValue);

    updateOptionIncrementalPrice(ccValue, ccMonthlyPrice, ccOptionMonthlyPrice);

    updateTotalMonthlyCost();

    updateTotalSetupCost();
});


//! REMOTEHAND SERVICE PAKET //

const rspValue = document.getElementById('rspValue');
const rspOptionMonthlyPrice = document.getElementById('rspOptionMonthlyPrice');
const rspOptions = document.querySelectorAll('.rspOptions');
const rspMonthlyPrices = [50,0];

rspOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(rspOptions);

        markOptionActive(option);

        updateOutput(option, rspValue);

        updateOptionChoicePrice(option, rspOptions, rspMonthlyPrices, rspOptionMonthlyPrice);

        updateTotalMonthlyCost();

        updateTotalSetupCost();
    });
});


//! Electricity Feeds //

const efValue = document.getElementById('efValue');
const efOptionMonthlyPrice = document.getElementById('efOptionMonthlyPrice');
const efPlusOption = document.getElementById('efPlusOption');
const efMinusOption = document.getElementById('efMinusOption');
const efMonthlyPrice = 40;

efPlusOption.addEventListener('click', () => {
    updateOutputPlusButton(efMinusOption, efValue);

    updateOptionIncrementalPrice(efValue, efMonthlyPrice, efOptionMonthlyPrice);
    
    updateTotalMonthlyCost();

    updateTotalSetupCost();
});

efMinusOption.addEventListener('click', () => {
    updateOutputMinusButton(efMinusOption, efValue);

    updateOptionIncrementalPrice(efValue, efMonthlyPrice, efOptionMonthlyPrice);
    
    updateTotalMonthlyCost();

    updateTotalSetupCost();
});


//! Update Monthly Total Cost (DRY ATTEMPT) //

// const optionButtons = document.querySelectorAll('.option');

// if (optionButtons) {
//     optionButtons.addEventListener('click', () => {
//         updateTotalMonthlyCost();
//     });
// };




//! SEND BUTTON //

const submitButton = document.getElementById('submitButton');
NEXTPAGE_URL = "http://localhost:5500/html/index.html";

if (submitButton) {
    submitButton.addEventListener('click', () => {
        location.href = NEXTPAGE_URL;
    });
};



// todo style.css for when in handy size: first options, rack  pic, output

// todo tests, documentation
//      delete all unnassary "element" or "options" or alike slang 
//      principles angewendet: reusability, naming conventions, dry, modularity, single responsibility principle

// todo spam schutz?
// todo error handling -> try {} catch() {} 
// const x = condition ? 1 : 2;

// todo query selector for dry principle for same updating behavior
// todo extra field for special things, controll what can be writen in it?
// todo komplette preisliste anzeigen können

// todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari

// todo design patterns for how scripts work together

// todo customer infos integrieren (formData.append)
// todo api_post.js: customer_id: user ID/ user login/ user email -> changing if customer needs to be created

