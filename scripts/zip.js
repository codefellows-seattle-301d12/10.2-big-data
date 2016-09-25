(function(module) {
  var zip = {};

  function getData() {
    $.getJSON('/data/manhattan.json', function(data) {
      // Run map to create a new array of returned objects with only the desired properties.
      var modifiedNeighborhoods = data.features.map(function(object) {
        return {
          zip: object.properties.zip,
          neighborhood: object.properties.neighborhood,
          address: object.properties.address,
          coordinates: object.geometry.coordinates.reverse()
        };
      });
      console.log(modifiedNeighborhoods);
      // From the modifiedNeighborhoods array, generate a new array of only the neighborhood names, reduced
      // to only the unique neighborhood names.
      var topFive = modifiedNeighborhoods.map(function(object) {
        return object.neighborhood;
      }).reduce(function(acc, next) {
        if (acc.indexOf(next) === -1) {
          acc.push(next);
        }
        return acc;
        // For each of the unique neighborhood names, create a new array of generated objects that checks the
        // modifiedNeighborhoods array for any objects with a neighborhood name that matches the current unique
        // neighborhood name and returns the associated zip codes as an array.
      }, []).map(function(uniqueHood) {
        var test = modifiedNeighborhoods.reduce(function(acc, next, idx, array) {
          if (array[idx].neighborhood === uniqueHood) {
            acc.push(next.zip);
          }
          return acc;
        }, []);
        return {
          neighborhood: uniqueHood,
          totalZips: test
        };
        // With the resulting array of unique neighborhoods and associated zip codes, sort it in descending order
        // of most zip codes to least.
      }).sort(function(a, b) {
        return b.totalZips.length - a.totalZips.length;
        // Create a new array by filtering out anything past the first 5 indexes of the current resulted array.
      }).filter(function(object, idx) {
        return idx < 5;
      });
      console.log(topFive);
    });
  };
  getData();
  module.zip = zip;
})(window);
