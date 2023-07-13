const formElement = document.querySelector('#sendForm');
const REQUEST_URL = 'https://support.speedbone.de/api/v1/tickets';
const API_TOKEN = 'YHkpseDxJtYZ8ohGpa4EzwJjt9jNOFnZ2U5eshp9HEwoG9kxX_ooO4hjJM8ZzVo6';


formElement.addEventListener('submit', event => {
    event.preventDefault();

    var formData = new FormData(formElement); //? formData.get('sizeSendInfo'); set / append / delete -> could change input after user input
    var DATA = [];
    for (const [key, value] of formData) {
        DATA.push({ key: value });
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
          // priority_id: 3, // state_id: 2, // type: 'email',
          customer: '', // todo customer_id: user ID/ user login/ user email -> changing if customer needs to be created
          article: {
            body: DATA,
            type: 'note',
          },
        }),
      };
      
      fetch(REQUEST_URL, requestOptions)
        // .then((response) => response.json())
        // .then((data) => console.log(data))
        // .catch((error) => console.log('Error:', error))
        ;
});
