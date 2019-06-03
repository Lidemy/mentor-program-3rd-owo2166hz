const request = require('request');

request(
  {
    url: 'https://api.twitch.tv/helix/games/top',
    headers: {
      'Client-ID': 'w5jzlgw0iu0j0r91u859wxfhzz2s7e',
    },
  },
  (error, respnse, body) => {
    const json = JSON.parse(body);
    json.data.forEach((alldata) => {
      console.log(`${alldata.id} ${alldata.name}`);
    });
  },
);