const express = require('express');
const routesAPI = require('./routes/routesAPI');
const routesHTML = require('./routes/routesHTML');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', routesAPI);
app.use('/', routesHTML);

app.listen(PORT, () => {
    console.log(`Now listening on PORT: ${PORT}`);
});