const path = require('path');
const bodyParser = require('body-parser');
//const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();
const { DB } = require('./config/DB');


//Ruta del item
const itemRoutes = require('./routes/Item');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect (DB,{useMongoClient : true})
.then(() => console.log('db connected'))
.catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/item', itemRoutes);


// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
} );