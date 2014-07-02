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


