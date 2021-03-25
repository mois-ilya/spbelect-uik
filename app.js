const fs = require('fs');
const axios = require('axios');
const qs = require('qs');
const encoding = require("encoding");
// const Iconv  = require('iconv').Iconv;

const data = qs.stringify({
  'numik': '2211'
});
const config = {
  method: 'post',
  url: 'http://www.st-petersburg.vybory.izbirkom.ru/region/st-petersburg?action=ik',
  headers: {
    'Connection': 'keep-alive',
    'Cache-Control': 'max-age=0',
    'Origin': 'http://www.st-petersburg.vybory.izbirkom.ru',
    'Upgrade-Insecure-Requests': '1',
    'DNT': '1',
    'Content-Type': 'application/x-www-form-urlencoded',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'Referer': 'http://www.st-petersburg.vybory.izbirkom.ru/region/st-petersburg?action=ik',
    'Accept-Language': 'ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
    'Cookie': 'JSESSIONID=44d6e358ce98875f39847fb10d3c; JSESSIONID=48034c204d88b1984c2417297162'
  },
  data: data
};

axios(config)
  .then(function (response) {
    const ctype = response.headers["content-type"];
    console.log(ctype);
    
    let text = response.data;
    // let text = encoding.convert(response.data, 'UTF-8', 'WINDOWS-1251');
    // text = encoding.convert(response.data, 'WINDOWS-1252', 'UTF-8');
    
    fs.writeFile('response.html', text, err => {
      if (err) return console.log(err);
      console.log('Yes');
    })
  })
  .catch(function (error) {
    console.log(error);
  });