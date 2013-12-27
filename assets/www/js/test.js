var js = document.createElement("script");
js.type = "text/javascript";
js.src = digest.js;

var digest = require('http-digest-client').createDigestClient('username', 'password');
digest.request({
  host: 'hostname.com',
  path: '/path.json',
  port: 80,
  method: 'GET',
  headers: { "User-Agent": "Simon Ljungberg" } // Set any headers you want
}, function (res) {
  res.on('data', function (data) {
    console.log(data.toString());
  });
  res.on('error', function (err) {
    console.log('oh noes');
  });
});

