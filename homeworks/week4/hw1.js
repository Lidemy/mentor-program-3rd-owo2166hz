let request = require('request');

request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    let list = JSON.parse(body);
      list.forEach((list) => {
        console.log(`${list.id} ${list.name}`);
    });
  },
);