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


function updateOutputPlusButton(counter, elementShownValue, elementSendInfo, elementMinusOption) {

    elementMinusOption.disabled = false;

    var updatedCounter = counter + 1; 

    
    elementShownValue.textContent = updatedCounter;
    elementSendInfo.textContent = updatedCounter, "Uplinks";

    return updatedCounter;
};

function updateOutputMinusButton(counter, elementShownValue, elementSendInfo, elementMinusOption) {
    
    if (counter === 0) {
        elementMinusOption.disabled = true;
    };
    
    counter --;
    console.log(uplinksCounter);
    
    elementShownValue.textContent = counter;
    elementSendInfo.textContent = counter, "Uplinks";
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
uplinksCounter = 1;

uplinksPlusOption.addEventListener('click', () => {
    
    updateOutputPlusButton(uplinksCounter, uplinksValue, uplinksSendInfo, uplinksMinusOption);
});

uplinksMinusOption.addEventListener('click', () => {

    updateOutputMinusButton(uplinksCounter, uplinksValue, uplinksSendInfo, uplinksMinusOption);
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
//todo error handling
//todo get.js 
//      -> https://netbox.intern.speedbone.work/dcim/racks/
//      -> mysql usage testing with branch from nari
//todo styles.css