const axios = require('axios');
const xml2js = require('xml2js');
const debug = require('debug')('app:goodreadService');

const parser = xml2js.Parser({ explicitArray: false });

function goodreadService() {
  function getBookById(id) {
    return new Promise((resolve, reject) => {
      // key: VJVjRDHlqxfeNY7kDY9B1Q
      // secret: 7vZG00TdWeFvbf9RkI6K1jy8aFrPPARKGluHL29IEs
      const url = `https://www.goodreads.com/book/show?id=${id}&key=VJVjRDHlqxfeNY7kDY9B1Q`;
      axios.get(url)
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.book);
            }
          });
        })
        .catch((error) => {
          reject(error);
          debug(error);
        });
    });
  }
  return { getBookById };
}

module.exports = goodreadService();
