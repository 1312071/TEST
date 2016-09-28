var express = require('express');
var ect = require('ect');
var ectRenderer = ect({watch:true, root:_dirname + '/views', ext: '.ect'});

app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);

var app = express();
app.listen(3000, function(){
	console.log('now listening on http://localhost:3000');
})

app.use('/', routes);