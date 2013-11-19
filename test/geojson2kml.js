var geojson2kml = require('../index.js'),
    should = require('should')

describe('geojson2kml', function(){
  it('should take a geojson file and output a kml file', function(done){
    geojson2kml('./in.geojson', './out.kml', function(err){
      if(err) throw err
      done()
    })
  })
})