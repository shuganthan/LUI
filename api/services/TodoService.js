var request = require("request")
var sessionid = ""
var webapi_url = "http://10.10.20.238:8000"
var user = "padecsysman"
var pass = "padecsysman"

module.exports = {
  getSession: function(next) {
	console.log ( "Todoservices.js getSession")
    /*Todo.find().exec(function(err, todos) {
      if(err) throw err;
      next(todos);
    }); */
	
	var jsonString =    "{ \"username\":\"padecsysman\",\"password\":\"padecsysman\" }" 
	var jsonObj = JSON.parse(jsonString);
	var options = {
		method: 'POST',
		body: jsonObj,
		json: true, 
		url: webapi_login = webapi_url + "/login"
	}

	request(options, function (err, res, body) {
	if (err) {
		console.log('Error :', err)
		return
	}
	console.log(' Body :', body)
	if ( body.response == 200)
		sessionid = body.sessionid
	console.log ("sessionid:",sessionid)
	next ( sessionid )
	
	});
  },
  startApi: function(next) {
	console.log ( "api\\services\\Todoservices.js startApi")
	console.log ("sessionid:",sessionid)
    
	var jsonString = "{\"value\":\"starting_up_on_grid\"}"
	var jsonObj = JSON.parse(jsonString);
	webapi_start = webapi_url + "/system/modes/modes:Transition?sessionid="
	webapi_start += sessionid
	var options = {
		method: 'POST',
		json: true, 
		body: jsonObj,
		url: webapi_start
	}

	request(options, function (err, res, body) {
	if (err) {
		console.log('Error :', err)
		return
	}
	console.log(' Body :', body)
	if ( body.response == 200)
		console.log ( "value:", body.value)
	//val = "{\"value\":\"" + body.value + "\"}"
	//resp = JSON.parse( val ) 
	next(body.value)
	
	
	});
  },
};

