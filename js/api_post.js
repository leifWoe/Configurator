const formElement = document.querySelector('#sendForm');
const REQUEST = 'https://reqres.in/api/unknown'
//? https://zammad/api/v1/tickets
//? https://docs.zammad.org/en/latest/api/intro.html?highlight=api#endpoints-and-example-data
//? https://docs.zammad.org/en/latest/api/ticket/index.html


formElement.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(formElement);
  //console.log(formData.get('sizeSendInfo')); //todo: set / append / delete


  var DATUM = "01.01.2001";
  var DATA = [];
  for (const [v, value] of formData) {
    DATA.push({key: value});
  }
  

  var REQUEST_BODY = {
    "title": "test ticket",
    "group": "User inquiry",
    "article": {
        "subject": "Rack Anfrage vom"+ DATUM, // todo: use created at
        "body": DATA,
        "type": "X",
        "internal": true,
    },
    "customer": "email@user.com",
    "user": "email@user.com",
    "note": "X"
    }
  

  fetch(REQUEST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(REQUEST_BODY),
  })
  .then(response => response.json()
  .then(data => console.log(data))
  .catch(error => console.log(error))
  );
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
