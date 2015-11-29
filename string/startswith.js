module.exports = function (str, query, position) {
  return str.substr(position, query.length) === query;
};
