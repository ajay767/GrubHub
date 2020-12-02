const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');

const dishRoute = require('./routes/dishRoute');
const userRoute = require('./routes/userRoute');
const restaurantRoute = require('./routes/restaurantRoute');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorContorller');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Implement CORS
app.use(cors());

// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 300,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);

app.use(express.json());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// app.use((req, res, next) => {
//   console.log('hello form middleware');
//   next();
// });

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'This is Api made with NODE.js ',
    app: 'GrubHub'
  });
});

//routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/dishes', dishRoute);
app.use('/api/v1/restaurant', restaurantRoute);

app.all('*', (req, res, next) => {
  next(new AppError('Route not defined!!', 404));
});

app.use(globalErrorHandler);

module.exports = app;
