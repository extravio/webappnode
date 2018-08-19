const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.use((req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.redirect('/');
    }
  });
  bookRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://root:root@mongo:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          const db = client.db(dbName);

          const col = await db.collection('books');
          const books = await col.find().toArray();

          res.render(
            'bookListView',
            {
              nav,
              title: 'Library',
              books,
            },
          );
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const url = 'mongodb://root:root@mongo:27017';
      const dbName = 'libraryApp';

      (async function mongo() {
        const { id } = req.params;
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected correctly to server');

          const db = client.db(dbName);

          const col = await db.collection('books');
          const book = await col.findOne({ _id: new ObjectID(id) });

          res.render(
            'bookView',
            {
              nav,
              title: 'Library',
              book,
            },
          );
        } catch (err) {
          debug(err.stack);
        }
        client.close();
      }());
    });
  return bookRouter;
}


module.exports = router;
