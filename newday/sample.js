var fs = require("fs");
var data = fs.readFileSync('Foo.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\n');
var header=arrayOne[0].split(',');
var count=0;
var row = arrayOne.length;
var col = header.length;
sugar=header.indexOf('sugars_100g');  
salt=header.indexOf('salt_100g');        
countriesIn=header.indexOf('countries');  

var array1=[];
var obj1={};
var i,j;
var arr=["Netherlands", "Canada", "United Kingdom", "Australia", "France", "Germany", "Spain","South Africa"]

for (i = 1; i < row-1; i++) {
 var rope= (arrayOne[i]).split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  obj1[header[countriesIn]]=rope[countriesIn];
  obj1[header[sugar]]=rope[sugar];
  obj1[header[salt]]=rope[salt];
  for(j=0;j<arr.length;j++)
   {
    if(obj1.countries==arr[j])
    {
    array1.push(obj1);
     }
   }
  obj1={};
};

var array2=[];
var sugars_100g=0,salt_100g=0;
for(i=0;i<arr.length;i++)
saltsugar(arr[i]);

function saltsugar(country)
{
 var obj2={};
 for(var i=0;i<array1.length;i++)
 {
 if(array1[i].countries===country&&array1[i].salt_100g!=''&&array1[i].sugars_100g!='')
 {
   if(array1[i].sugars_100g!=''){
     count++;
   sugars_100g+=parseFloat(array1[i].sugars_100g);
 }
}
}
sugars_100g=sugars_100g/count;
count=0;
obj2["country"]=country;
obj2["sugar_consump"]=sugars_100g;
for(var i=0;i<array1.length;i++)
{
if(array1[i].countries===country&&array1[i].salt_100g!=''&&array1[i].sugars_100g!='')
{
 if(array1[i].sugars_100g!=''){
   count++;
   salt_100g+=parseFloat(array1[i].salt_100g);
}
}
}
salt_100g=salt_100g/count;
obj2["salt_consump"]=salt_100g;

array2.push(obj2);
sugars_100g=0;
salt_100g=0;
}

var file = 'ex.json';
var obj=JSON.stringify(array2);
console.log( array2);
fs.writeFileSync(file, obj);