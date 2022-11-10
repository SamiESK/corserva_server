const express = require('express');
const cors = require('cors');
const { sequelize } = require('./util/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
app.use('/sales', require('./routes/sales'));

(async () => {
    try {
        await sequelize.sync({ force: false });
        app.listen(process.env.EXTERNAL_PORT || 3001);
        console.log(`App listening to port ${process.env.EXTERNAL_PORT}`);
    } catch (error) {
        console.error(error);
    }
})();

module.exports = app;
