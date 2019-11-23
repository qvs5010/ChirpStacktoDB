var mqtt = require('mqtt')
var MongoClient = require('mongodb').MongoClient;
var client = mqtt.connect({
            host: 'mqttserver.net',
            port: 1883,
            username: 'xxxxxxxx',
            password: 'xxxxxx'
    });


var Murl = "mongodb://xxxxxxx:xxxxx@mongodbserver.net:27017/nodes";
var socket = require('socket.io-client')('http://socketioserver.net:12000');
socket.on('connect', function (socket) {
  console.log('Socket.IO Connected!');
});
client.subscribe('application/+/device/+/rx');
console.log('MQTT Connected!');
client.on('message', function (topic, message) {

	var jsonPase = message.toString();
	console.log("----------------------");  
	console.log(jsonPase);  
	console.log("----------------------");

	var js_dataOBJ = JSON.parse(jsonPase);
	var SEARCHobb = js_dataOBJ.object;
	var sendMSG = js_dataOBJ['devEUI']+'__'+JSON.stringify(js_dataOBJ);
	
	console.log(sendMSG);
	
	socket.emit('send message',{'token':js_dataOBJ['devEUI'],'message':sendMSG});
	console.log('Emmit Socket.IO on MSG '+js_dataOBJ['devEUI']);	

    MongoClient.connect(Murl, function(err, db) {
      if (err) throw err;
		
      var dbo = db.db("nodes");
      var nodeName = "Node_"+js_dataOBJ['devEUI'];
      
      dbo.createCollection(nodeName, function(err, res) {
        if (err) throw err;
		  
        console.log("Collection:"+nodeName);
		  
        dbo.collection(nodeName).insertOne(js_dataOBJ, function(err, res) {
          if (err) throw err;
          console.log(nodeName+" document inserted");
        }); 
		  
        db.close();
      });
     }); 
})