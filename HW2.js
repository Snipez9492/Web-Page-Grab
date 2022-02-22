/*
const wget = require('node-wget');

wget('https://www.nba.com/');

wget({
    url: 'https://www.nba.com/',
    dest: 'Users/waleorimogunje/Grad_School/CISC7332X/HW2/Web-Page-Grab/',
    timeout: 2000
},

    function (error, response, body) {
        if (error) {
            console.log('--- error:');
            console.log(error);
        } else {
            console.log('--- headers:');
            console.log(response.headers);
            console.log('--- body: ');
            console.log(body);
        }
    }
);


wget({
    url: 'https://www.nba.com/',
    dest: 'Users/waleorimogunje/Grad_School/CISC7332X/HW2/Web-Page-Grab/',
    dry: true
}, function (err, data) {
    console.log('--- dry run data: ');
    console.log(data);
}

);
*/
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
var express = require('express');
var app = express();
var fs = require('fs');
const now = require('performance-now');
var request = require('request');
const url = 'https://www.nba.com/';

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