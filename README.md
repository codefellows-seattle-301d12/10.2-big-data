### Big Data with geoJSON

The goal for this assignment is to simulate a data set that you may
encounter during project week.

Let's focus only on transforming this collection. No need to
invoke a constructor, or pass off control to the View.

Start simple:

Transform the initial collection into
an array of each object's properties.

We first want to pick up on only a few properties, therefore, you may need to build these objects out dynamically (perhaps with map?) with just the following properties:

The zip code
Its neighborhood
Its address (if applicable, otherwise null)
Ensure that this new collection also contains the coordinates for each zip. The "coordinates" property should be its own object with "lat" and "lng" properties since we'd like to incorporate Google Maps later.

Finally, populate a top five array of neighborhood objects (in descending order) based on the number of zips they associate with! Each object should have two properties: the neighborhood, and the total number of zip codes. For example, the first element in the top five array should be an object with a "neighborhood" property equal to Midtown, and a "total" property equal to 37.
