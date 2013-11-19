var exec = require('child_process').exec,
    path = require('path')

module.exports = function(inPath, outPath, done){
  var ogrCommand = 'ogr2ogr -f KML '+path.resolve(process.cwd()+'/'+outPath)+ ' '+
                    path.resolve(process.cwd()+'/'+inPath)

  exec(ogrCommand, function(err, stdout, stderr){
    done(err)
  })
}