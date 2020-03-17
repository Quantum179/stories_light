'use strict';

var _koa = require('koa');

var Koa = _interopRequireWildcard(_koa);

var _cors = require('@koa/cors');

var _cors2 = _interopRequireDefault(_cors);

var _koaBodyparser = require('koa-bodyparser');

var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var app = new Koa();
var port = process.env.PORT || 3000;

// Configuration
app.use((0, _cors2.default)());
app.use((0, _koaBodyparser2.default)());

// Database 
(0, _db.initDatabase)();

// Router
app.use(_router2.default.routes());
app.use(_router2.default.allowedMethods());

// Run app
app.listen(port);
console.log('Server running on port : ' + port);