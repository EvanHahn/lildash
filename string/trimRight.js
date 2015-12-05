module.exports = function (str, chars) {
  chars = chars || ' ';
  var pattern = new RegExp('([' + chars + ']*$)', 'g');

  return str.replace(pattern, '');
};
