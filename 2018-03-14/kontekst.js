// ET = 2 ч, АТ = 6 ч составьте структуру и изобразите на странице правила интерпретации значений в логическом контексте
function task0() {

var condition = {
	true: true,
	false: false,
	1: 1,
	0: 0,
	empty_str: "",
	str_1: "1",
	str_0: "0",
	null: null,
	undefined: undefined,
	object: {},
	array: [],
	NaN: NaN
}
	$( ".container" ).append( "<table>Logical context - (не строгое равенство - '==')</table>" );
	$( "table" ).append( "<tr>" + condition.false + "</tr>" );
var array = Object.values(condition);
var array_names = [];
array_names = Object.keys(condition);

	for (var i = 0 ; i < array.length; i++) {

		$( "tr" ).append( "<td><span style=\"background-color:Aqua\">" + array_names[i] + "</span><br></td>" );

		for (key in condition) {

		if (condition[key]==array[i]) {             // сравнение значений 
			$( "table tr td:nth-child("+ (i+1) +")" ).append("<span style=\"background-color:Lime\">true</span><br>" );
		}

		else if (condition[key]!==array[i]) {
			$( "table tr td:nth-child("+ (i+1) +")" ).append("<span style=\"background-color:Fuchsia\">false</span><br>" );
		}

		else break
	}
}

$("tr").find("td:first").before('<td><br>==<br><br></td>');
	for (var key in condition) {
$("tr").find("td:first").append("<span style=\"background-color:Aqua\">" + key + "</span><br>" );
	}
$("table").css({
		"border": "2px solid blue", 
		"border-collapse": "collapse",
		"background-color": "lightgray"
	});
$("table tr td").css({
		"width": "70px",
		"text-align": "center",
		 "padding": "1px"
	});
$("table span").css({
		"display": "block", 
		"height": "30px",
		 "border": "1px solid black"
	});
}

// 1. ET = 35 мин, АТ = 20 мин 	Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.multi() );

var calculator = {
	read: function() {
		var a = prompt('1-значение', '');
		var b = prompt('2-значение', '');
		calculator.x = a;
		calculator.y = b;
	},
	sum: function(x, y) {
		return Number(this.x) + Number(this.y)
	},
	multi: function(x, y) {
		return this.x * this.y
	},
	diff: function(x, y) {
		return this.x - this.y
	},
	div: function(x, y) {
		return this.x / this.y
	},
}
function task1() {
calculator.read();
console.log( calculator.sum() );
console.log( calculator.multi() );
console.log( calculator.diff() );
console.log( calculator.div() );

}
// 2.ET = 15 мин, АТ = 25 мин. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
function task2() {

var coffeeMachine = {
	message: 'Your coffee is ready!',
	start: function() {
		setTimeout(
			function(){	alert(coffeeMachine.message);
			}, 3000)
	}
}
coffeeMachine.start();

}
// 3. ET = 25 мин, АТ = 15 мин.	Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.
function task3() {

var sayHello = function hello() {
	alert("Hello " + this.firstname + " "+ this.lastname);
}
var userA = {
firstname: "Alexey",
lastname: "Silifonov"
}
var userB = {
firstname: "Nataliya",
lastname: "Shiryaeva"
}
sayHello.call(userA);
sayHello.call(userB);

}
// 4.	ET = 1 ч, АТ = 45 мин. Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.
function task4() {

var counter = {
	count: 0,
	inc: function() {
		this.count++;
		return this
	},
	dec: function() {
		this.count--;
		return this
	},
	getValue: function() {
		return this.count
	}
}
var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1
}
// 5. ET = 1 ч, АТ = 2 ч. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.
function task5() {

var me = {
	x: 0,
	y: 0,
	getSum: function(x, y) { 
		me.x = arguments[0]; me.y = arguments[1];
		return x + " + " + y + " = " + calculator.sum.apply(me)
	  },
	getDiff: function(x, y) {
		me.x = arguments[0]; me.y = arguments[1];
		return x + " - " + y + " = " + calculator.diff.apply(me)
	},
	getMulti: function(x, y) {	
		me.x = arguments[0]; me.y = arguments[1];
		return x + " * " + y + " = " +  calculator.multi.apply(me)
	},
	getDiv: function(x, y) { 
		me.x = arguments[0]; me.y = arguments[1];
		return x + " / " + y + " = " +  calculator.div.apply(me)
}
}
alert( me.getSum(40, 13) );
alert( me.getDiff(10, 8) );
alert( me.getMulti(4, 3) );
alert( me.getDiv(1, 0) );

}
// 6. ET = 20 мин., АТ = 3+ ч.Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
// console.log( sum(1, 2, 3, 4, 5) ); // 15
function task6() {

function sum() {
var mas = arguments[arguments.length-1];
	arguments.length--;
	if (arguments.length !== 0) {
		arr2 = sum.apply (null, arguments);
		mas += arr2;
	}
	return mas
}
console.log( sum(1, 2, 3, 4, 5) );  // 15


// var 2
function sum2(...args) {  // записали в арг все наши аргументы в виде массива
return args.reduce( function(res, item) {
	return res + item
})
}
console.log( sum2(1, 2, 3, 4, 5) );  // 15
// var 3
function sum3() {  // for of
	var result = 0;
	for (let val of arguments) {
	result += val;
	}
return result
}
console.log( sum3(1, 2, 3, 4, 5) );  // 15
// var 4
function sum4() {  // for
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
	result += arguments[i];
	}
return result
}
console.log( sum4(1, 2, 3, 4, 5) );  // 15

}
// 7. ET = 2 ч, АТ = 50 мин. Создайте объект со свойством delay и методами appendTo и appendText. Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. Метод appendText может дописывает текст в добавленный элемент. Создайте массив строк и запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву. Live preview

var obj = {
	delay: 1000,
	appendTo: function() {
		$('<p>').appendTo('.container');
	},
	appendText: function(text) {
		$('p').text(text);
	},
	string: [" H", "e", "l", "l", "0!"]
}	
function str() {
for (let i = 0;  i < obj.string.length; i++) {
	 (function(i) {
        setTimeout(function() {
        	var a = obj.string[i];
            $('p').append(a);
        }, i*obj.delay);
    })(i);
}
}
obj.appendTo();
obj.appendText("Alexey, ");
str();

// 8.  ET = 45 мин., АТ = 25 мин. Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
function task8() {

format.call(country, "// ", ""); // Ukraine
format.apply( country, [["// ["], ["]"]] ); // [Ukraine]
format.call(country.capital, "// ", ""); // Kyiv
format.apply(country.capital, [["// "], [""]]); // Kyiv
format.apply(null, ["// ", ]); // undefined

}
// 9.  ET = 1 ч., АТ = 20 мин. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
var user = {
    name: 'John'
};

function format(start, end) {
    console.log(start + this.name + end);
}

// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// function userformat(left, right) {
// 	format.call(user, left, right);
// }
// userformat('<<<', '>>>');
// userFormat('<<<', '>>>'); // <<<John>>>

// Реализуйте 2 версии текущего задания, используя:
function task9() {
// 1. Анонимную функцию;
var userFormat = (left, right) => format.call(user, left, right);
userFormat('<<<', '>>>');
// 2. Метод bind().
var formatBind = format.bind(user, '<<<', '>>>');
formatBind();
}
// 10. ET = 1 ч., АТ = 40 мин. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:
function concat(str1, str2, razd) {
	var string = String(str1) + String(razd) + String(str2)
	console.log ( string );
	return string
}
function hello(str) {
	var f = concat.bind(null, "Hello", str, " ");
	return f() 
}
function task10() {

concat("Hello", "User", ": ");
hello ("World");
hello('John'); 

}
// hello('World'); // Hello World
// hello('John'); // Hello John*/