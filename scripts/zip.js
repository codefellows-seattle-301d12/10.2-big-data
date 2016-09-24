(function(module) {
  var zip = {};

  function getData() {
    $.getJSON('/data/manhattan.json', function(data) {
      // Start here  :-)
  }

  getData();
  module.zip = zip;
})(window);
