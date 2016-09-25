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
      var justNeighborhoods = modifiedNeighborhoods.map(function(object) {
        return object.neighborhood;
      }).reduce(function(acc, next) {
        if (acc.indexOf(next) === -1) {
          acc.push(next);
        }
        return acc;
      }, []);
      console.log(justNeighborhoods);
    });
  };
  getData();
  module.zip = zip;
})(window);
