var fs = require("fs");

var f=fs.readFileSync('Foo.csv',{encoding:'utf-8'},function(err){console.log(err);});
arrayOne=f.split("\r\n");

var header=arrayOne[0].split(',');
var Row=arrayOne.length;
var Col=header.length;

var jArray=[];

var i=0,j=0;
for (i = 1; i < Row-1; i++) {

    var obj = {};
    var myNewLine=arrayOne[i].split(",");

    for (j = 0; j< Col; j++) {
        var headerText = header[j].substring(1,header[j].length-1);
        var valueText = myNewLine[j].substring(1,myNewLine[j].length-1);
        obj[headerText] = valueText;
    };
    jArray.push(obj);
};

fs.writeFileSync('ex.json',JSON.stringify(jArray),'utf8',function(err){console.log(err);});