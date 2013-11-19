module.exports = function(inPath, outPath, done){
  exec('ogr2ogr -f KML '+__dirname+'/'+outPath+ ' '+
        __dirname+'/'+inPath, function(err, stdout, stderr){
    done(err)
  })
}