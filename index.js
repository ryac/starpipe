module.exports = {

  /**
   * add stars to string
   */
  starme: function(str) {
    var parsed = str.trim().replace(/\**\s*(\w)\s*\**/g, "$1");
    return '**' + parsed + '**';
  },

  /**
   * add pipes to string
   */
  pipeme: function(str) {
    var parsed = str.trim().replace(/\|*\s*(\w)\s*\|*/g, "$1");
    return '||' + parsed + '||';
  }

}