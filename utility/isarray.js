module.exports = Array.isArray || function (value) {
  return ({}).toString.call(value) === '[object Array]';
};
