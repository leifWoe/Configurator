var POST_URL = 'https://zammad/api/v1/tickets';

var REQUEST_BODY = {
    "title": "test ticket",
    "group": "User inquiry",
    "article": {
        "subject": "Rack Anfrage [DATUM]",
        "body": document.getElementById("sizeDefaultTd").value,
        "type": "X",
        "internal": false,
    },
    "customer": "email@user.com",
    "user": "email@user.com",
    "note": "X"
    }

// ? GOOGLE FORM
// ? ZAMMAD TOKEN

function onSubmit(e) {}

const request = new Request(POST_URL, {
    method: 'POST',
        body: JSON.stringify(REQUEST_BODY),
        headers: {}, // ?
});

fetch(request)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Something went wrong on API server!");
    }
  })
  .then((response) => {
    console.debug(response);
    // …
  })
  .catch((error) => {
    console.error(error);
  });