const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

let { database, username, password, host, dialect, port } = dbConfig;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// sequelize
//     .authenticate()
//     .then((res) => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch((err) => {
//         console.error('Unable to connect to the database:', err);
//     });

module.exports = sequelize;
