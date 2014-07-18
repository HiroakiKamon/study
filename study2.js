function func(){
  var x = "kojima",
      y = "satou",
      z = "yamada";

  var obj = {x,y,z};
  console.log(obj[1]);
}

function obj(){
   var //ローカル変数を多くする。

   
//アンチパターン   
function Parent(){}

function Child(){}

var some_var = 1;

var module1 ={};
module1.data = {a:1, b:2};
var module2 = {}

//良いパターン
var MYPP = {};
MYPP.Parent = function (){};
MYPP.Child = function (){};

MYPP.some_var = 1;

MYPP.modules = {};

MYPP.modules.module1 ={};
MYPP.modules.module1.data = {a:1,b:2};
MYPP.modules.module2 = {};

//グローバル変数はすべて大文字にするというルールにするとわかりやすい。！！！！

var MYAPP = {};
//より良い使い方tukaika
if(typeof MYAPP = "undefined")}{
   
}
