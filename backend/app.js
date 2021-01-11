const express = require('express');
const dotenv = require('dotenv');

// Initialize modules
dotenv.config();
const app = express();

const mqttClient = require('./mqtt/mqtt_client');
const mysqlClient = require('./db/mysql_client');

const MqttQueries = require('./db/mqtt_queries');
const mqttQueries = new MqttQueries(mqttClient);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/bins', require('./routes/bins.route'));

// Serve
app.listen(3000, () => {
    console.log(`[App] Server is listening on port ${3000}`);
});