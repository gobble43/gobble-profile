const express = require('express');
const app = express();

// Initial Configuration, Static Assets, & View Engine Configuration
require('./config/initializeServer.js')(app, express);

// API Routes
require('./routes/api-routes.js')(app);

app.listen(app.get('port'), () => {
  console.log('listening on', app.get('port'));
});
