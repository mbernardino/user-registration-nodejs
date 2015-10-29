var express = require('express'); 
var cons = require('consolidate');

app = express();
/* primeiro teste */
// app.get('/',function(req,res){ res.send('Hello world!')});

app.listen(3000);
console.log('app rodando na localhost:3000');

app.engine('html', cons.swig);
app.set('view engine','html');
app.set('views',__dirname+'/views');

/* app.get('/',function(req,res){res.send();}); */
app.get('/',function(req,res){
  res.render('index')
});

app.use(express.static(__dirname + '/resources'));

app.use('/js', 
  express.static(__dirname+'/resources/javascript'));







