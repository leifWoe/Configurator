const formElement = document.querySelector('#sendForm');
const REQUEST_URL = 'https://support.speedbone.de/api/v1/tickets'
const API_TOKEN = 'YHkpseDxJtYZ8ohGpa4EzwJjt9jNOFnZ2U5eshp9HEwoG9kxX_ooO4hjJM8ZzVo6'
//! docu:
// keine Ahnung was das fürn token ist: gSQGQq1HBAVzAKVYHIPu-gpL03V4U0AG1CogzpaaZ8uDcZGeeUsUSipn0MXQexDg

// alles token: h_sHaMvYVfPRRJ_LdgW3F3018xsh44Iy2iox6onvIbhsazdQIRBODWgiDBeB_30E
// only agent api token: YHkpseDxJtYZ8ohGpa4EzwJjt9jNOFnZ2U5eshp9HEwoG9kxX_ooO4hjJM8ZzVo6

// https://support.speedbone.de/api/v1/groups/1 work ???

//? https://zammad/api/v1/tickets
//? https://reqres.in/api/unknown
//? https://docs.zammad.org/en/latest/api/intro.html#authentication


formElement.addEventListener('submit', event => {
  event.preventDefault();


  var API_HEADERS = new Headers();

  API_HEADERS.append(
    'Authorization', 'Token token=' + API_TOKEN);
  API_HEADERS.append(
    'Content-Type', 'application/json');

  var REQUEST_OPTIONS = {
    method: 'POST',
    headers: API_HEADERS,
  };

  
  var formData = new FormData(formElement);
  //? formData.get('sizeSendInfo'); set / append / delete -> could change input after user input
  
  var DATA = [];
  for (const [key, value] of formData) {
    DATA.push({key: value});  
  }
  
  var REQUEST_BODY = {
    "title": "Configurator title test ticket",
    "group_id": 1,
    "customer_id": 3,
    "article": {
      "subject": "Configurator test ticket",
      "body": DATA,
      "type": "note",
      "internal": false
    }
  }
  // todo inquiry -> make spezial type 
  // todo customer_id: user ID/ user login/ user email -> changing if customer needs to be created
  

  fetch(
    REQUEST_URL,
    REQUEST_OPTIONS,
    REQUEST_BODY, 
  )
  .then(response => response.text())
  .then(response => console.log(response))
  .catch(error => console.log('error', error));
});


// todo use this when status code is known:
// .then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } 
//     else {
//       throw new Error("Server Error: " + response.status);
//     }
//   })
//   .then((response) => {
//     console.debug(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
