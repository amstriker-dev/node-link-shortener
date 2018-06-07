module.exports = (app) => {
  const controllers = require ('../controllers/urlController.js');

    app.get('/api/item/:code', controllers.findone);

    app.post('/api/item', controllers.findIpDetails);

}
