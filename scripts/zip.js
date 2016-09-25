(function(module) {
  var zip = {};

  function getData() {
    $.getJSON('/data/manhattan.json', function(data) {
      var modifiedNeighborhoods = data.features.map(function(object) {
        return {
          zip: object.properties.zip,
          neighborhood: object.properties.neighborhood,
          address: object.properties.address,
          coordinates: object.geometry.coordinates.reverse()
        };
      });
      console.log(modifiedNeighborhoods);
    });
  };
  getData();
  module.zip = zip;
})(window);
