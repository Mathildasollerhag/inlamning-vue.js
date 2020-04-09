const http = require('http');
const port = process.env.port || 8888;
const app = require('./app');
const mongodb = require('mongoose');

const serverUri = 'http://localhost:' + port;
const mongoUri = 'mongodb+srv://Mathilda:bytmig123@cluster0-24zha.mongodb.net/webapidb?retryWrites=true&w=majority';


// webserver
http.createServer(app).listen(port, () => console.log('WEBSERVER: ' + serverUri))

// mongodb
mongodb.set('useCreateIndex', true).connect(mongoUri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MONGODB: Running'))