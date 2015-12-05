module.exports = function (str, chars) {

  var chars = chars || ' ';
  var pattern = new RegExp('([' + chars + ']*$)', 'g');

  return str.replace(pattern, '');
};
