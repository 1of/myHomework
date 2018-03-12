// 1. ET = 20 мин. АТ = 5 мин.	Напишите функцию a, которая будет служить коротким именем для alert, то есть выводит пользовательское сообщение в стандартном модальном окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускает процесс отладки.
// a( 'Hello' );
// d();
// a( 'World' );
function task1() {
//******************
function a(data) {
		alert(data);
	}
function d() {
		debugger;
	}
a('hello');
d();
a('world');
//******************
}

// 2. ET = 15 мин. АТ = 5 мин. Напишите функцию max, которая сравнивает два числа и возвращает большее: 
function task2() {
//******************
function max(num1, num2) {
if (num1 > num2) {
	return num1
} else {
	return num2
}
}
console.log( max(12, -25) ); // 12
//******************
}

// 3. ET = 30 мин. АТ = 15 мин.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
function task3() {
//******************
function min() {
	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] < arguments[0]) {
            arguments[0] = arguments[i];
		}
	}
return arguments[0]
}
console.log( min(0, -1, 100, 500, 100500) );
//******************
}

// 4. ET = 1 ч. АТ = 15 мин.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями, у некоторых есть поле middlename. Используя встроенные функции массивов:	
// a.	Отфильтруйте пользователей младше 18 лет
// b.	Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
// c.	Сформируйте новый массив, который содержит только полное имя пользователей
function task4() {
//******************
var users = [
	{firstname: "Alexey", lastname: "Silifonov", age: 27},
	{firstname: "Oleg", lastname: "Epifanov", age: 5},
	{firstname: "Masha", lastname: "Krypina", middlename: "Mashuha", age: 17},
	{firstname: "Kirill", lastname: "Kapcov", age: 75},
	{firstname: "Elena", lastname: "Tulpanova", middlename: "Linuxa", age: 37},
	{firstname: "Andrey", lastname: "Bratkov", middlename: "Chetkiy", age: 21},
	{firstname: "Vasilisa", lastname: "Prekrasnaya", age: 32},
	{firstname: "Maksim", lastname: "Poroshenko", age: 12},
	{firstname: "Valentin", lastname: "Drishenkov", age: 18},
	{firstname: "Denis", lastname: "Petyxov", middlename: "Cygarkov", age: 19},
	]
	// a.	Отфильтруйте пользователей младше 18 лет
	for (var key of users) {
		if (key.age < 18)
		console.log( "Лица меньше 18-ти:", key);
	}
	// b.	Добавьте каждому объекту поле fullName, которое является конкатенацией firstname, middlename и lastname, если есть все три, и только firstname и lastname, если middlename нет
	for (var key of users) {
	if (key.middlename) {
		key.fullName = key.firstname +  " " + key.middlename + " " + key.lastname;
		}
	else if (!key.middlename){
	    key.fullName = key.firstname +  " " + key.lastname;
}
}
console.log("Массив после добавления fullName: ", users);
// c.	Сформируйте новый массив, который содержит только полное имя пользователей
var arr = [];
	for (var key in users) {
		arr.push(users[key].fullName);
}
console.log("Новый массив arr только с fullName: ", arr);
//******************
}

// 5. ET = 25 мин. АТ = 4 мин.	Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.
function task5() {
//******************
function shifting(arr) {
	arr.shift();
		return arr
}
console.log( shifting([123, "Open", "Car", 77]) );
//******************
}

// 6. ET = 25 мин. АТ = 10 мин. Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
function task6() {
//******************
function pushing(arr) {
var rand = Math.ceil(Math.random()*50);
	for (var i = 0; i < rand; i++) {
		arr.push(-1);	//пушим произвольное значение -1
		}
		return arr
}
console.log( pushing([1, "2nd element", "3rd", 4]) );
//******************
}

// 7. ET = 1 ч. АТ = 50 мин. Напишите функцию аналог метода jQuery $.extend. Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.
function task7() {
//******************
function extend(source) {
for (var i = 1; i < arguments.length; i++) {	
	for (var key in source) {
		for (var keyArg in arguments[i]){
		if (key == keyArg) {source[key] = arguments[i][key];}	
		if (key !== keyArg) {source[keyArg] = arguments[i][keyArg];}
		}
}		
}
	return source
}
var source = {firstname: 'Tom', age: 10};
console.log(source);
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
//******************
}

// 8. ET = 25 мин. АТ = 15 мин. Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает на странице текст в формате: 
// 				<имя_автора>, <дата>
// 				<текст_сообщения>
function task8() {
//******************
function setComment(date, message, author = 'Anonymous') {
	if (date === undefined || message === undefined) { 
		alert("Данные переданы некорректно!");
		return
	}
alert(author + ", " + date +  "\n" +  message);
}
setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok
setComment('2016-11-02', 'You could do it better!');
setComment( );
// Anonymous, 2016-12-22
// You could do it better!
//******************
}

// ---------------------Замыкания----------------------

// 1. ET = 1,3 ч. АТ = 25 мин.	Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода:
function task9() {
//******************
function createTimer() {
	var makeTime = performance.now();
	return function() {
		return performance.now() - makeTime;	
	}
}
var timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() + " мс от начала выполнения alert('!')" ); // время в мкс от начала выполнения createTimer() до момента вызова timer()
//******************
}

// 2. ET = 1 ч. АТ = 30 мин. Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:
function task10() {
//******************
function createAdder() {
	var b = arguments[0];
	return function() {
		return b + arguments[0];
}
}
var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
//******************
}