function my() {     "use strict";     var x = "omg";     console.log(x);}my();//consoleで１０ずつたしていく関数をかく<<50for (var i = 0; i <= 50; i+=10) {     console.log(i);}//グローバル変数へのアクセスmyglobal = "hello";console.log(myglobal);console.log(window.myglobal);console.log(window["myglobal"]);console.log(this.myglobal);//アンチパターン:暗黙のグローバル　　function sum (x,y){				result = x + y;	return result;}//訂正版function sum(x,y){	var result = x + y;	return result;}//グローバルオブジェクトへのアクセスvar global = (function () {        "use strict";        return this;    }());	//先頭にその関数内で宣言するvarを全部宣言するfunction func() {	var a = 1,		b = 2,		c = 3,		sum = a + b + c,		myobject = {},		i,		j;}//hasOwnPropertyfunction  man(){	var man =  {		hands : 2,		legs  : 1,		heads : 1	};	for (var i in man) {		if ( man.hasOwnProperty(i)) {			console.log(i, ":", man[i]);		}	}		}man();	//type of- 対象となる値のデータ型を表す文字列を返す演算子。if (typeof Object.prototype.myMethod !== "function") {	Object.prototype.myMethod = function() {		//実装。。。。。			};}//switch　を使ったパターンvar	inspect_me = 0,	result = '';	switch	(inspect_me){case 0:	result = "xero";  	break;case 1:	result = "one";  	break;default:	result = "unknown";}//parseInt() は文字列を数値に変更出来る。var month = "06", year = "09"; month = parseInt(month,10); year = parseInt(year,10); //for (var i = 0; i < 10; i += 1){	console.log(i);	}//for (var i = 0, max = 10; i < max; i += 1){	console.log(i);	}	//配列からのとりだす。var a = ["findfriends", "slidestory", "Lily"];for (var i = 0; i < 3; i += 1){	console.log(a[i]);	}//オブジェクトリテラルから要素をループで出力するvar ohmyg = {a:1, b:2, c:3};var prms;for (prms in ohmyg){	console.log(prms);}//コンストラクタの頭文字は大文字にする//コンストラクタの基本function Dog(name,cry){	this.name = name;	this.bark = function () {	    console.log(cry)	}	}	var Dog = new Dog('きなこ','わんわん');	console.log(Dog.name);	Dog.bark();	//初期値をあらかじめ設定しておきたいとき等は、次のようにする。/*function Point(x,y){	document.write(p.x);	p.move(10, 10);	document.write(p.x);	}	*///function Point(){  this.x = 50;  this.y = 50;  return this;}var p = new Point();  // これでオブジェクトを作成document.write( p.x );  // これでデータを取り出し//命名規則var person = {	getName: function () {		return this._getFirst() + '' + this.__getLast();	},	_getFirst: function(){		//。。。		},	_getLast: function () {			//....				}	};	//オブジェクトリテラルの話var dog ={};dog.name = "kamon"; //プロパティを１つ追加dog.getName = function (){	return dog.name;	};	dog.getName = function () {	return "Fido";	};		//以下二つの方法は同じオブジェクトを作る方法。var car = {goes: "far"};//var adam = new Person("Adam");adam.say();var Person = function (name) {	this.name = name;	this.say = function () {		return "I am " + this.name;				};		};//ワッフルオブジェクトにおいしーっていう値を格納しておいて、新しいオブジェクトを作る。それで値を出力する？function Waffle() {	this.tastes = "deicious";	}	var good_morning = new Waffle ();	console.log(typeof good_morning);  //object //typeofは対象となる値のデータ型を表す文字列を返す演算子だよ。	console.log(good_morning.tastes);  //delicious	//thatをつかってやってみる。function Waffle1 () {	var that = {};	that.tastes ="Yummy";	return that;}//もっと簡潔に。 でも、プロトタイプへのリンクが失われてしまうこと。function Waffle2 (){	return {		tastes : "yummy"		};	}	//欠点克服function waffle3() {		if (!(this instanceof Waffl3)){		return new Waffle3();		}				this.tastes = "yummy";		}	Waffle3.prototype.wantAnother = true;		//呼び出しのテキスト		var first = new Waffle3(),	second = Waffle3();		console.log(first.tastes);  //yummy	console.log(second.tastes); //yummy		console.log(first.wantAnother); //true	console.log(second.wantAnotherr); //true	//インスタンスを検査する汎用的なやり方。		if ;(!(this instanceof arguments.callee)) {		return new arguments.callee();	}		//