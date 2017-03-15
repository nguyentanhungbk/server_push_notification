var apns = require('apn');

var options = {
  token: {
    key: "/Users/HungNguyen/Documents/Projects/My_Projects/Notificate_Prac/BE/Notification_Prac/config/APNsAuthKey_58XF8XTA5S.p8",
    keyId: "58XF8XTA5S",
    teamId: "9BMHD9MUCA",
  },
  production: false,
};

var options_s = {
  cert: "/Users/HungNguyen/Documents/Projects/My_Projects/Notificate_Prac/BE/Notification_Prac/config/cert.pem",
  key: "/Users/HungNguyen/Documents/Projects/My_Projects/Notificate_Prac/BE/Notification_Prac/config/key.pem",
  production: false
}

var apnProvider = new apns.Provider(options_s);

module.exports = apnProvider;