// составьте структуру и изобразите на странице правила интерпретации значений в логическом контексте
var condition = {
	true: true,
	false: false,
	one: 1,
	zero: 0,
	empty_str: "",
	one_str: "1",
	zero_str: "0",
	null: null,
	undefined: undefined,
	obj: {},
	arr: [],
	NaN: NaN
}
	$( ".content" ).append( "<table>Test</table>" );
	$( "table" ).append( "<tr>"+ condition.false +"</tr>" );	
for (key in condition) {
	if(condition[key]) {

	}
}
var c = condition.arr;


/*
1.	Создайте объект calculator с методами:
a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
b.	sum() возвращает сумму этих двух значений
c.	multi() возвращает произведение этих двух значений
d.	diff() возвращает разницу
e.	div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );*/
var calculator = {
	read: function() {
		var a = prompt('1-значение', '');
		var b = prompt('2-значение', '');
		calculator.x = a;
		calculator.y = b;
	},
	sum: function() {
		return Number(this.x) + Number(this.y)
	},
	multi: function() {
		return Number(this.x) * Number(this.y)
	},
	diff: function() {
		return Number(this.x) - Number(this.y)
	},
	div: function() {
		return Number(this.x) / Number(this.y)
	},
}
calculator.read();
calculator.sum();
console.log(calculator.sum() + " " +calculator.diff() + " " + calculator.div());
// 2.	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.
var coffeeMachine = {
	message: 'Your coffee is ready!',
	start: function() {
		setTimeout(
			function(){	alert(coffeeMachine.message);
			}, 3000)
	}
}
coffeeMachine.start();
// 3.	Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте каждого из пользователей персонально.
var doHello = function hello() {
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
doHello.call(userA);
doHello.call(userB);
// 4.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1

// 5.	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));


// 6.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

// console.log( sum(1, 2, 3, 4, 5) ); // 15


// 7.	Создайте объект со свойством delay и методами appendTo и appendText. Метод appendTo с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. Метод appendText может дописывает текст в добавленный элемент. Создайте массив строк и запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву. Live preview

// 8.	Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }


// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

// format.call(/* Ваш код ); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined

// 9.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя

// userFormat('<<<', '>>>'); // <<<John>>>

// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().

// 10.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

// hello('World'); // Hello World
// hello('John'); // Hello John*/