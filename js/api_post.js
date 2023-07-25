const formElement = document.querySelector('#sendForm');
const REQUEST_URL = 'https://support.speedbone.de/api/v1/tickets';
const API_TOKEN = 'YHkpseDxJtYZ8ohGpa4EzwJjt9jNOFnZ2U5eshp9HEwoG9kxX_ooO4hjJM8ZzVo6';


formElement.addEventListener('submit', event => {
    event.preventDefault();

    var formData = new FormData(formElement); 
    //console.log(formData);
    formData.set('sizeValue', "Größe: "+ sizeValue.value);
    formData.set('locationValue', "Ort: "+ locationValue.value);
    formData.set('uplinksValue', "Uplinks: "+ uplinksValue.value);
    formData.set('ccValue', "Cross Connects: "+ ccValue.value);
    formData.set('rspValue', "Service Pakete?: "+ rspValue.value);
    formData.set('efValue', "Feeds: "+ efValue.value);
    // formData.append("von Kunde "+ 'X')
    var DATA = [];
    for (const value of formData) {
        DATA.push(value);
    }

    var requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token token=' + API_TOKEN
        },
        body: JSON.stringify({
          title: 'Configurator Inquiry',
          group_id: 1,
          // priority_id: 3,
          customer: '',
          article: {
            body: DATA,
            type: 'note',
          },
        }),
      };
      

      //console.log(requestOptions);
      console.log(DATA);
      //fetch(REQUEST_URL, requestOptions)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) => console.log('Error:', error))
        ;
});
