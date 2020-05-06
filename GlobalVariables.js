//GLOBAL VARIABLES
var fs = require('fs');
var parsedJson = require('./DATA.json');
var Pad = [[],[],[],[],[],[],[],[],[]]

//Not Used Function
function Readfile(){
 fs.readFile('DATA.json', 'utf8', function(err, contents) {
    return  contents
});
}