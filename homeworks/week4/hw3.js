    
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

if (process.argv[2] === 'delete') {
  request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (error, response) => {
      console.log(response.statusCode);
    });
}

if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: `${process.argv[3]}`,
      },
    },
    (error, response, body) => {
      console.log(body);
      console.log(response.statusCode);
    },
  );
}

if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: `${process.argv[4]}`,
      },
    },
    (error, response, body) => {
      console.log(body);
      console.log(response.statusCode);
    },
  );
}
