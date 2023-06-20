const formElement = document.querySelector('#sendForm');
const REQUEST = 'https://reqres.in/api/unknown'
const API_TOKEN = 
// todo bash: curl -H "Authorization: Token YOUR_API_TOKEN" https://your-zammad-instance/api/v1/your-endpoint
//? Replace "YOUR_API_TOKEN" with your actual API token and "https://your-zammad-instance/api/v1/your-endpoint" with the appropriate API endpoint you want to access.
//? https://zammad/api/v1/tickets
//? https://docs.zammad.org/en/latest/api/intro.html#authentication


formElement.addEventListener('submit', event => {
  event.preventDefault();
  var formData = new FormData(formElement);
  //console.log(formData.get('sizeSendInfo')); //? set / append / delete


  var DATUM = "false Datum -> use created at";
  var DATA = [];
  for (const [key, value] of formData) {
    DATA.push({key: value});
  }
  
//? make status http code? 

  var REQUEST_BODY = {
    "title": "test ticket",
    "group": "User inquiry",
    "X-On-Behalf-Of": "user ID/ user login/ user email", //? or as "customer"?
    "article": {
      "subject": "Rack Anfrage vom"+ DATUM, // todo: use created at
      "body": DATA,
      "type": "inquiry",
      "internal": false,
    },
  }
  
  
  fetch(REQUEST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': API_TOKEN
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
