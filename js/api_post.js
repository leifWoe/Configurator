const formElement = document.querySelector('#sendForm');
const REQUEST_URL = 'https://support.speedbone.de/api/v1/tickets'
const API_TOKEN = "Token token=h_sHaMvYVfPRRJ_LdgW3F3018xsh44Iy2iox6onvIbhsazdQIRBODWgiDBeB_30E"


// todo make api call work withut cors
//? https://zammad/api/v1/tickets
//? https://reqres.in/api/unknown
//? https://docs.zammad.org/en/latest/api/intro.html#authentication


formElement.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(formElement);
  //? formData.get('sizeSendInfo'); set / append / delete
  

  var DATA = [];
  for (const [key, value] of formData) {
    DATA.push({key: value});
  }
  

  var REQUEST_BODY = {
    "title": "Configurator title test ticket",
    "group_id": 1,
    "customer_id": 123, //?user ID/ user login/ user email
    "article": {
      "subject": "Configurator test ticket",
      "body": DATA,
      "type": "note", //?inquiry 
      "internal": false
    }
  }
  
  
  fetch(REQUEST_URL, {
    body: REQUEST_BODY, //JSON.stringify()
    headers: {
      Authorization: API_TOKEN,
      'Content-Type': 'application/json'
    },
    method: 'POST',
    // mode: 'no-cors', // because of request pre fly error 
    
  });
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(error => console.log(error));
});


// todo use second api call to create customer if customer not available
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


//! xml http request handler

//   var http = new XMLHttpRequest();
//   http.open("POST", REQUEST_URL, true);

//   http.setRequestHeader("Content-type", "application/json");
//   http.setRequestHeader("Authorization", "Token token="+API_TOKEN);

//   http.onreadystatechange = function() {
//     if(http.readyState == 4 && http.status == 200) {
//         alert(http.responseText);
//     }
//   };

//   http.send(REQUEST_BODY)
// });