const express = require('express');

const sequelize = require('./util/database');
const Sale = require('./models/sales');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})
app.use('/sales', require('./routes/sales'));

(async () =>{
  try {
    await sequelize.sync(
      {force: false}
    );
    app.listen(process.env.EXTERNAL_PORT || 3001);
    console.log("App listening to port " + process.env.EXTERNAL_PORT);
  } catch (error) {
    console.error(error);
  }
})()