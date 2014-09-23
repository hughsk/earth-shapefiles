# earth-shapefiles [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Shapefiles of the Earth sourced from
[Natural Earth](http://www.naturalearthdata.com/).

## Usage

[![NPM](https://nodei.co/npm/earth-shapefiles.png)](https://nodei.co/npm/earth-shapefiles/)

After installing, you can get the file path of the shapefile like so:

``` javascript
require.resolve('earth-shapefiles/110m.shp')
require.resolve('earth-shapefiles/50m.shp')
require.resolve('earth-shapefiles/10m.shp')
```

Or like so:

``` javascript
require('earth-shapefiles')['110m']
require('earth-shapefiles')['50m']
require('earth-shapefiles')['10m']
```

## License

MIT. See [LICENSE.md](http://github.com/hughsk/earth-shapefiles/blob/master/LICENSE.md) for details.
