function markOptionActive(elementClicked) {
    elementClicked.classList.add('active');
};


function unmarkAllOptions(elementsOption) {
    elementsOption.forEach(function(elementClicked) {
        elementClicked.classList.remove('active')
    });
};


function updateOutput(elementClicked, elementShownValue, elementSendInfo) {
    elementShownValue.textContent = elementClicked.textContent;
    
    elementSendInfo.value = elementClicked.textContent;

};


function updateOutputPlusButton(elementShownValue, elementSendInfo, elementMinusOption) {
    elementMinusOption.disabled = false;

    let currentValue = parseInt(elementShownValue.textContent);
    currentValue++;
    
    elementShownValue.textContent = currentValue;
    elementSendInfo.value = currentValue+ " Uplink(s)";
};

function updateOutputMinusButton(elementShownValue, elementSendInfo, elementMinusOption) {   
    let currentValue = parseInt(elementShownValue.textContent);

    let newValue = currentValue - 1;

    if (newValue === 0) {
        elementMinusOption.disabled = true;
    };
    
    elementShownValue.textContent = newValue;
    elementSendInfo.value = newValue+ " Uplink(s)";
}





//! SIZES aka GRÖßEN //


const sizeShownValue = document.getElementById('sizeValue');
const sizeOptions = document.querySelectorAll('.sizeOptions');
const sizeSendInfo = document.getElementById('sizeSendInfo');

sizeOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(sizeOptions);

        markOptionActive(option);

        updateOutput(option, sizeShownValue, sizeSendInfo);
    });
});


//! LOCATION aka ORT //

const locationValue = document.getElementById('locationValue')
const locationOptions = document.querySelectorAll('.locationOptions');
const locationSendInfo = document.getElementById('locationSendInfo');

locationOptions.forEach(function(option) {

    option.addEventListener('click', function() {
        
        unmarkAllOptions(locationOptions);

        markOptionActive(option);

        updateOutput(option, locationValue, locationSendInfo);
    });
});


//! UPLINKS //

const uplinksValue = document.getElementById('uplinksValue');
const uplinksPlusOption = document.getElementById('uplinksPlusOption');
const uplinksMinusOption = document.getElementById('uplinksMinusOption');
const uplinksSendInfo = document.getElementById('uplinksSendInfo');

uplinksPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(uplinksValue, uplinksSendInfo, uplinksMinusOption);
});

uplinksMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(uplinksValue, uplinksSendInfo, uplinksMinusOption);
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
            rspDefaultTd.textContent = 'without Remote Service Package';
            rspSendInfo.value = 'without Remote Service Package';
    })};

    if (rspNoOption) {
        rspNoOption.addEventListener('click', () => {
            rspDefaultTd.textContent = 'Remote Service Package';
            rspSendInfo.value = 'Remote Service Package';
    })};
});


//! SEND BUTTON //

window.addEventListener("DOMContentLoaded", () => {
    const sendOpenButton = document.getElementById('sendOpenButton');
    const sendButtonDialog = document.getElementById('sendButtonDialog');
    const sendCloseButton = document.getElementById('sendCloseButton');
    NEXTPAGE_URL = "x"

    if (sendOpenButton) {
        sendOpenButton.addEventListener('click', () => {
            sendButtonDialog.showModal();
        })};
    
    if (sendCloseButton) {
        sendCloseButton.addEventListener('click', () => {
            sendButtonDialog.close();
        })};

    //todo Forward Location after close button is clicked
    // sendCloseButton.onclick = () => {
    //     location.href = NEXTPAGE_URL;
    // };
});


// todo remove "when window loaded logic - add it with defer when script is called"

//todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari
//todo styles.css for pop up 

// todo tests, documentation, error handling

// principles angewendet: reusability, naming conventions, dry, modularity, single responsibility principle