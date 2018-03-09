// 1. ET = 20 мин. АТ = 25 мин.	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
function task1() { 
var arr = [2, 2, 6, 'Hi', 'Jonny', 'How are you?', '10', '25', 'TheEnd100'];
var result = 0;
var sum = 0;
var sum = arr.forEach(function(item, i) {
	if (isNaN(item)) {	
	}
	else {
result += parseInt(item);
	}	
});
alert("Cумма всех чисел массива: " + result);
}

// 2.	Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, используя вложенные циклы.
function task2() { 
var arr = [];
for (var i = 0, rand; i < 10; i++) {
	 rand = (Math.random() * 10).toFixed(2);
	 arr.push(rand);
}
console.log("Случайный массив: " + arr);
for (var i = 0, el; i < arr.length; i++) { 
	 for (var j = 0; j <= 5; j++) {
		el = arr[i] * arr[i] * arr[i] * arr[i] * arr[i];
	}
	console.log(i + " элемент в ^5- " + el);
}
}
// 3.	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
function task3() { 
var arr = [];
for (var i = 0; i < 2; i++) {
	arr.push(+prompt("Добавление в массив", ''));
}
var add = arr.reduce(function(item1, item2) { //клевый метод, но работает только с числовыми данными в массиве
return item1 + item2;
})
	console.log(arr);
	alert(add);
}
// 4.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.	Добавьте в начало массива значение ‘Backbone.js’
// b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
function task4() {
var framework = ['AngularJS', 'jQuery'];
framework.unshift('Backbone.js');
framework.push('ReactJS', 'Vue.js' );
framework.splice(1, 0, 'CommonJS');
var c = framework.indexOf('jQuery');
var delited2 = framework.splice(c, 1);
alert("Это здесь лишнее " + delited2);
}
// 4.	Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
function task5() {
var string = 'Как однажды Жак звонарь сломал городской фонарь';
var arr = string.split(' ');
console.log(arr);
arr.splice(1, 3, arr[2], arr[3], arr[1]);
console.log(arr);
var string2 = arr.join(' ');
alert(`Исходная строка: ${string} 
Обработанная строка: ${string2}`)
}


// 5.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
function task6() {
for (var i = 0, arr = []; i < 9; i++) {
arr.push([]);
for (var j = 0, c = 0; j < 10; j++) {
	c = (i+1) + 'x' + (j+1) + '=' + ((j+1)*(i+1)); 	
	arr[i][j] = c;
}
}
console.log(arr);
}
// 6.	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
var person = {
name: 'Alexey',
surname: 'Silifonov',
age: 10, 
job: {company: "unknow", stage: 2}
}
var word = prompt("введите свойство: ", '');
for (var key in person) {
	if (word == key) {
			console.log(person[word]);
	}
	else {
		console.log("Не найдено");
	}

}
// 7.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

// 8.	Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

// 9.	Создайте структуру данных, полностью описывающую html-разметку картинки:


// <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" />

// 10.	С помощью jQuery добавьте картинку на страницу вместе со всеми атрибутами, используя созданную ранее структуру.