const formElementTESTTEST = document.querySelector('#sendForm');

formElementTESTTEST.addEventListener('submit', event => {
    event.preventDefault();

    var username = "bakre@speedbone.de";
    var password = "u#c2BepYC6j1$09N";
    var endpoint = "https://support.speedbone.de/api/v1/tickets";

    var requestOptions = {
    headers: {
        Method: 'POST',
        Authorization: "Basic " + btoa(username + ":" + password),
        Body: {
            "title": "Configurator title test ticket",
            "group_id": 1,
            "customer_id": 3,
            "article": {
              "subject": "Configurator test ticket",
              "body": 'DATA',
              "type": "note",
              "internal": false
            }
          }
    },
    };


    console.log('testing request');


    fetch(endpoint, requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("Error:", error)
)});
