var express = require('express');
var bodyparser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(bodyparser());

app.use(express.static(__dirname + '/data'));

app.post('/data', function(req,res){
	var post = req.body;
	var path = __dirname + '/data/crm.json';

	fs.readFile(path, 'utf8', function(err, data){
    var content = JSON.parse(data);
    content.customers.push({first_name:post.first_name, last_name:post.last_name, phone:post.phone, email:post.email, description:post.description});
    var jsonified = JSON.stringify(content);

    fs.writeFile(path, jsonified, function(err){
    	if(err) {
    		alert("fuck");
    	}
    })
	});

    res.json({message:"Votre client a bien etais ajouté", status:'ok'});
    res.send("GG WP");
});

app.listen(7000, function () {
  console.log('sa marche sur le port 7000')
})