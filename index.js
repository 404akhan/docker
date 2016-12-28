var express = require('express');
var app = express()

app.get('/',  (req, res) => {
  res.send('1CHANGING NOW . From Docker. Adding Jenkins. Someword.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!'+process.env.port);
});
/*
var unuased_var = 2;
*/x =4;

function my_func(a,b){
return 4 == null;
}

 
 
