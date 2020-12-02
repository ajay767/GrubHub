module.exports = (err, req, res, next) => {
  console.log(err.name);
  res.status(err.statusCode).json({
    status: 'failed',
    requestedUrl: req.url,
    statusCode: err.statusCode,
    message: err.message,
    note: 'global error handler'
  });
};
