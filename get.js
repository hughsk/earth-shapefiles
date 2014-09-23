var request = require('request')
var unzip   = require('unzip')
var path    = require('path')
var url     = require('url')
var bl      = require('bl')

var prefix = 'http://naciscdn.org/'
var scales = ['110m', '50m', '10m']

module.exports = get

function get(scale, done) {
  if (!scales.some(function(_scale) {
    return scale === _scale
  })) throw new Error(
    '"scale" parameter should be one of ' + scales.join(', ')
  )

  var uri = url.resolve(prefix
    , '/naturalearth/'+scale+'/physical/ne_'+scale+'_land.zip'
  )

  request.get(uri)
    .pipe(unzip.Parse())
    .on('entry', function(entry) {
      var ext = path.extname(entry.path)

      if (ext === '.shp') {
        return entry.pipe(bl(next('shp')))
      } else
      if (ext === '.shx') {
        return entry.pipe(bl(next('shx')))
      } else
      if (ext === '.dbf') {
        return entry.pipe(bl(next('dbf')))
      }

      return entry.autodrain()
    })

  var data = {
      shx: null
    , shp: null
    , dbf: null
  }

  function next(file) {
    return function(err, buffer) {
      if (err) return done(err)
      data[file] = buffer

      if (!data.shx) return
      if (!data.shp) return
      if (!data.dbf) return

      done(null, data.shp, data.shx, data.dbf)
    }
  }
}
