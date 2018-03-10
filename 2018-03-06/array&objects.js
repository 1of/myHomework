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

// 2. ET = 30 мин. АТ = 55 мин.	Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. Затем переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, используя вложенные циклы.
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
// 3. ET = 20 мин. АТ = 25 мин.	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
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
// 4. ET = 25 мин. АТ = 20 мин.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
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
// 5. ET = 30 мин. АТ = 45 мин.	Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.
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


// 6. ET = 30 мин. АТ = 1 ч.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
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
// 7. ET = 25 мин. АТ = 15 мин.	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.
function task7_8() {
var person = {
name: 'Alexey',
surname: 'Silifonov',
age: 10
}
var word = prompt("введите свойство: ", '');

if (word in person) {
   alert(person[word]);
    console.log(person);
} else {
 var property = prompt('Введите свойство для добавления', '');
 person[word] = property;
 console.log(person);
 alert("Новый обьект: " + word + " со значением: " + person[word])
} 

// 8. ET = 15 мин. АТ = 20 мин.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.
var phone = { 
}

phone.brand = prompt('brand', '');
phone.model = prompt('model', '');
phone.resolution = prompt('resolution', '');
phone.color = prompt('color', '');
console.log("Object phone: ", phone);
person.phone = Object.assign({}, phone);
console.log("New Object person: ", person);
}
// 9.ET = 1 ч. АТ = 25 мин. Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.
function task9() {
var dates = {}
dates.current = new Date(); //записываем текущую дату в обьект
var stopdate = new Date(0); //создаем свою дату для работы
stopdate.setUTCMilliseconds((dates.current - (365 * 24 * 60 * 60 * 1000)));  //отнимаем кол-во мс в году от текущей даты и записываем значение в свою дат
dates.second = stopdate; //записываем вторую дату в обьект (-365 дней)
console.log("Object dates: ", dates);
var userdata = (prompt('Введите дату в формате yyyy-MM-dd', '')).split('-');  //переводим дату пользователя в массив с разделителем
//проверка, сравниваем каждый элемент массива с текущим годом, месяцем, числом. Если совпадает знач все ок
if (userdata[0] == dates.current.getFullYear() && userdata[1] == (dates.current.getMonth()+1) && userdata[2] == dates.current.getDate()) {
	alert("Есть такая дата!");
} else if (userdata[0] == dates.second.getFullYear() && userdata[1] == (dates.second.getMonth()+1) && userdata[2] == dates.second.getDate()){
	alert("Есть такая дата!");
}
else {
	alert("Такая дата отсутсвует!");
}
}
// 10.ET = 5 мин. ч. АТ = 3 мин.	Создайте структуру данных, полностью описывающую html-разметку картинки:
function task10() {
var img = {
	src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
	alt: "",
	style: "border: 5px solid #ccc",
	width: "300"
}
console.log("Object dates: ", img);
}
// <img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" />

// 10.	ET = 5 мин. ч. АТ = 20 мин.С помощью jQuery добавьте картинку на страницу вместе со всеми атрибутами, используя созданную ранее структуру.
// 1-й вариант с лишней записью в массив значений и свойств, и последующее их использование
// var c = [], j = [], i = 0;
// for (var prop in img) {
// c[i] = prop;
// j[i] = img[prop];
// i++;
// }
// $('<img>').appendTo('.content');
// 	for (var i = 0; i <= c.length; i++) {
// 	$('img').attr(c[i], j[i]);
// 	}
// 2-й вариант 
function task11() {
	$('<img>').appendTo('.content');
	for (var prop in img) {
	 	$('img').attr(prop, img[prop]);
	}
}
