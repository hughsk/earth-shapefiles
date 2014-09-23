var get = require('./get')
var fs  = require('fs')

console.error('Downloading shapefiles')

;['110m'
, '50m'
, '10m'
].forEach(function(scale) {
  get(scale, function(err, shp, shx, dbf) {
    if (err) throw err
    console.error('* Got ' + scale + '...')
    fs.writeFile(scale + '.shp', shp)
    fs.writeFile(scale + '.shx', shx)
    fs.writeFile(scale + '.dbf', dbf)
  })
})
