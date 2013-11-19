geojson2kml
===========

a node.js module for converting geojson to kml

```bash
npm install geojson2kml
```

This module is a simple wrapper around ogr2ogr that takes a geojson file and outputs a kml file. ogr2ogr must be installed to use this module. 

```javascript
var geojson2kml = require('geojson2kml')

geojson2kml('./polygons.geojson', './polygons.kml', function(err){
  if(err) throw err
})
```
