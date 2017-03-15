var apnProvider = require('../config/iOSPushnotification');
var apn = require('apn');

var welcome = function(req, res, next){
    res.json({message:'hello everyone'});
}

var sendPushNotification = function(req, res, next){
    var content = req.body;
    
    var note = new apn.Notification();

    note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
    note.badge = 3;
    note.sound = "ping.aiff";
    note.alert = "hello robert";
    note.payload = req.body;
    note.topic = "com.test.fbnotification";

    var deviceToken = "04fdecaa22d319d9e59ed275981baf51b3e8a31e0da47adc92e80834a01178bc";

    apnProvider.send(note, deviceToken).then( (result) => {
        res.json({result});
    });
}

module.exports = {
    route: function(router){
        router.get('/users', welcome),
        router.post('/notification', sendPushNotification)
    },
}