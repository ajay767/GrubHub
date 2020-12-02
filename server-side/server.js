const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE_URL.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected successfully!!');
  })
  .catch(() => console.log('Some error occured while connecting to DB!!'));

app.listen(process.env.PORT, (req, res) => {
  console.log(`server is up and running on port ${process.env.PORT}...`);
});
