
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var express = require('express');
var app = express();
var fs = require('fs');
const now = require('performance-now');
var request = require('request');
readline.question('What is the URL?', name => {
    app.get('/', function (req, res) {
        request(name, function (error, response, body) {

            if (!error && response.statusCode == 200) {
                fs.writeFileSync('HW2.html', body);
                console.log(body);
            }
        });
    });
    readline.close();
})

app.listen(3000, function () {
    console.log('Node server is running...');

})