
//名前付き関数関数式　省略可能ななめを定義している特殊な関数式。

var add = function add(a,b){
   return a + b;
}; //←カンマ必須

function foo() {
   //プログラム
} //カンマ不要、関数宣言

//構文状の制約で宣言が使えないときに関数式を使う。

function foo(){}
   var bar = function () {};
   var baz = function baz () {};

   foo.name;   //function.name ＝　関数の名前を表示するプロパティ
   bar.name;
   baz.name;   //デバッグに役に立naznazenara,

//コールバックパターん

function writeCode(callback){
   //なにか処理する
   callback();
}

function introduceBugs(){
   //バグ
}

writeCode(introduceBugs);

var findNodes = function (){
   var i = 10000,
   nodes = [],
   found;
   
   while (i){
      i -= 1;
      //複雑なロジック
      nodes.push(found);
   }
   return nodes;
};

var hide = function (){
   var i = 0,max =nodes.length;
   for(; i < max; i += 1){
      nodes[1].style.display ="none";
   }
};

hide(findNodes());

var myapp = {};
myapp.color = "green";
myapp.paint = function(node){
node.style.color = this.color;
}

var findeNodes = function (callbacK){
   if (typeof callback === "function"){
   callback(found);
}
}

var setUp = function () {
   var count = 0;
   return function () {
      return (count +=1)
};
};

var next = setUp();
next();
next();
next();

var scareMe =function(){
   alert("boo");
   scareMe = function(){
      alert("double boo");
   };
};

scareMe.property = "properly"; //プロパティを追加するメソッド

var prank = scareMe; //別の名前に代入

var spooky = {      //メソッドとして使う。
   boo : scareMe
};
prank();
prank();
console.log(prank.property);//properly


//即時関数

(function () {
   alert('mister toyooka!');
})();

