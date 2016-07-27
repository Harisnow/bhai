var fs = require("fs");
var data = fs.readFileSync('Foo.csv');
var stringData=data.toString();
var arrayOne= stringData.split('\n');
var header=arrayOne[0].split(',');
var count=0;
var row = arrayOne.length;
var col = header.length;
fat=header.indexOf('fat_100g');  
carbohydrate=header.indexOf('carbohydrates_100g');  
protein=header.indexOf('proteins_100g');        
countriesIn=header.indexOf('countries'); 
var array1=[];
var obj1={};
var i,j;
var region=[["Norway", "United Kingdom", "Denmark","Sweden","France", "Belgium", "Germany", "Switzerland" ,"Netherlands","Portugal", "Greece", "Italy","Spain", "Croatia","Albania"],
["Norway", "United Kingdom", "Denmark","Sweden"],
["France", "Belgium", "Germany", "Switzerland" ,"Netherlands"],
["Portugal", "Greece", "Italy","Spain", "Croatia","Albania"]]

console.log(region[0]);
for (i = 1; i < row-1; i++) {
 var rope= (arrayOne[i]).split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  obj1[header[countriesIn]]=rope[countriesIn];
  obj1[header[fat]]=rope[fat];
  obj1[header[carbohydrate]]=rope[carbohydrate];
  obj1[header[protein]]=rope[protein];
    for(j=0;j<north.length;j++)
     {
      if(obj1.countries==north[j])
      {
      array1.push(obj1);
       }
     }
     for(j=0;j<north.length;j++)
      {
       if(obj1.countries==central[j])
       {
       array1.push(obj1);
        }
      }
      for(j=0;j<north.length;j++)
       {
        if(obj1.countries==south[j])
        {
        array1.push(obj1);
         }
       }
   obj1={};
};


var array2=[];
var carbohydrates_100g=0,fat_100g=0,proteins_100g=0;
for(i=0;i<region.length;i++)
{
nutrients(north[i],"North Europe");
nutrients(central[i],"Central Europe");
nutrients(south[i],"South Europe");
}
function nutrients(country,region){
  var obj2={};
  for(var i=0;i<array1.length;i++)
  {
  for(j=0;j<region.length;j++)
  {
  if(array1[i].countries===region[j]&&array1[i].fat_100g!=''&&array1[i].carbohydrates_100g!=''&&array1[i].proteins_100g!='')
  {
    fat_100g+=parseFloat(array1[i].fat_100g);
    carbohydrates_100g+=parseFloat(array1[i].carbohydrates_100g);
    proteins_100g+=parseFloat(array1[i].proteins_100g);
  }
}
}
obj2["countries"]=region;
obj2["fat_100g"]=fat_100g;
obj2["carbohydrates_100g"]=carbohydrates_100g;
obj2["proteins_100g"]=proteins_100g;

array2.push(obj2);
fat_100g=0;
carbohydrates_100g=0;
proteins_100g=0;
}

var file ='ex.json';
var obj=JSON.stringify(array2);
console.log( array2);
fs.writeFileSync(file, obj);