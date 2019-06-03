    
let request = require('request');
let process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (error, response, body) => {
      let list = JSON.parse(body);
      list.forEach((list) => {
        console.log(`${list.id} ${list.name}`);
      });
    });
}

if (process.argv[2] === 'read') {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response, body) => {
      let read = JSON.parse(body);
      console.log(`${read.id} ${read.name}`);
    });
}