module.exports = (theFunc) => (res, req, err, next) => {
    Promise.resolve(theFunc(res, req, next)).catch(next);
  };
  