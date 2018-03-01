"use strict";
// 1.	ET = 10 мин. АТ = 25 мин. Создайте три переменные с любыми числовыми значениями. Используя вложенные условные операторы if, найдите минимальное число и отобразите на экране имя переменной и ее значение. Создайте блок-схему, описывающую алгоритм работы программы.
let a = 4, b = 2, c = 1;
if (a < b && a < c ) {
	alert("a = " + a);
}
if (b < c && b < a) {
	alert("b = " + b);
}
if (c < a && c < b) {
	alert("c = " + c);
}

// 2.	ET =  10 мин. АТ = 20 мин. В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить и вывести на экран, x – отрицательное число, положительное или ноль.
var x  = prompt('Введите число x', '');
var sign = Math.sign(x);
if (sign === -1) {
	alert("x - отрицательное: " + x);
}
else if (sign === 0) {
	alert("x - ноль: " + x);
}
else if (sign === 1) {
	alert("x - положительное: " + x);
}

// 3. ET = 20 мин. АТ = 20 мин.	У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
var youMoney  = +prompt('Сколько у Вас денег', ''), friendMoney = +prompt('Сколько у Друга денег', '');
var amount = youMoney + friendMoney;
if (amount > 50000) {
	alert("Мы летим отдыхать! У нас " + amount + " грн.");
}
else 
	alert("Мы можем выпить Пива! У нас " + amount + " грн.");
// 4.	ET = 8 мин. АТ =  5 мин. В переменную age запишите возраст человека. Если значение больше или равно 20 и меньше 27, в alert выводится “Выслать повестку”.
var age  = +prompt('сколько вам лет?', '');
if (age >= 20 && age <= 27) {
	alert("Выслать повестку");
}
// 5.	ET = 10 мин. АТ = 10 мин. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
var bus = +prompt('введите номер маршрутки?', '');
if (bus == 7 || bus == 225 || bus == 255) {
	alert("Миленько, Едем домой! ☺");
	}
else {
		alert("Эхх, ожидаем! :.(");
	}

// 6. ET = 10 мин. АТ = 25 мин.	В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу. (new Date()).getDay()
var day = (new Date()).getDay();
if ((day == 6) || (day == 0)) {   // Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0(воскресенье) до 6(суббота).
	alert("Необходимо идти на работу! :-(");
}

// 7. ET = 1 ч. АТ = 15 мин. 	Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации и выведите его в alert.
var currency = prompt('Введите тип операции (usd-uah/uah-usd):', '').toLowerCase();
var money = prompt('Введите сумму:', '');
var result;
console.log(currency);
switch (currency) {
case 'usd-uah': result = money * 27; alert(money + " USD = " + result + " UAH"); break;
case 'uah-usd': result = money / 27; alert(money + " UAH = " + result + " USD"); break;
default: alert("Вы неправильно ввели операцию.");
}

// 8.	 ET = 45 мин. АТ = 30 мин.  Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.
// if-else
var greeting = "", lang = prompt('Введите переменную lang: (для if else)', '');
if (lang == "ru") {
	greeting = "Приветствуем!";
	alert(greeting);
}
else if (lang == "en") {
	greeting = "Hello!";
	alert(greeting);
}
else if (lang == "de") {
	greeting = "die Grussansprache!";
	alert(greeting);
}
else {
	alert("Вы неправильно ввели.");
}
// switch-case
lang = prompt('Введите переменную lang: (для switch)', '');
switch (lang) {
case 'ru': greeting = "Приветствуем!"; alert(greeting); break;
case "en": greeting = "Hello!"; alert(greeting); break;
case 'de': greeting = "die Grussansprache!"; alert(greeting); break;
default: alert("Вы неправильно ввели.");
}
// 9. ET = 20 мин. АТ = 15 мин. 	В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). 
var month = (new Date()).getMonth();
switch (month) {
case 11: //декабрь
case 0:  //январь
case 1:	alert("Зима"); break; //февраль
case 2:  //март
case 3: 
case 4: alert("Весна"); break; //май
case 5: 
case 6: 
case 7: alert("Лето"); break; //август
case 8: 
case 9: 
case 10: alert("Осень"); break; //ноябрь
default: alert("Вы неправильно ввели.");
}
// ET = 40 мин. АТ = 20 мин. 10.	Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
var lang = (prompt('Введите переменную lang (ru или en):', '')).replace ((/\d/g), "");
var day = prompt('Введите переменную day (от 0 до 6):', ''), result;
if (lang == "ru" && day == 0) {result = "воскресенье"; alert(result)}
else if (lang == "ru" && day == 1) {result = "понедельник"; alert(result)}
else if (lang == "ru" && day == 2) {result = "вторник"; alert(result)}
else if (lang == "ru" && day == 3) {result = "среда"; alert(result)}
else if (lang == "ru" && day == 4) {result = "четверг"; alert(result)}
else if (lang == "ru" && day == 5) {esult = "пятница"; alert(result)}
else if (lang == "ru" && day == 6) {result = "суббота"; alert(result)}
else if (lang == "en" && day == 0) {result = "sunday"; alert(result)}
else if (lang == "en" && day == 1) {result = "monday"; alert(result)}
else if (lang == "en" && day == 2) {result = "tuesday"; alert(result)}
else if (lang == "en" && day == 3) {result = "wedneesday"; alert(result)}
else if (lang == "en" && day == 4) {result = "thursday"; alert(result)}
else if (lang == "en" && day == 5) {esult = "friday"; alert(result)}
else if (lang == "en" && day == 6) {result = "saturday"; alert(result)}
else {alert("Вы ввели неправильны шаблон! пример: lang = ru ; day = 2 ");}

//ET = 2 ч. АТ = 1 ч . Поиск элементов DOM (объектной структуры документа) с использованием библиотеки jQuery

// Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:
// 1.	Таблица расположена посредине страницы, расстояния между ее ячейками нет
// 2.	Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
// 3.	Фон в ячейках первых шести строк –#106B63
// 4.	Фон в ячейках строк 7-9 –#E7C610
// 5.	Фон в ячейках строк 10-12 – #C64A08
// 6.	Фон в ячейках строк 13-15 –#B43100
// 7.	Фон в ячейках всех оставшихся строк –#102173
// 8.	У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет
$('table').css({'margin':'0 auto', "border-collapse":"collapse"});
$('td').css({"width":"10px", "height":"10px", "background":"#eee", "border":"1px solid #000"});
$('tr:nth-child(-n+6) > td').css('background','#106B63');
$('tr:nth-child(n+6):nth-child(-n+8) > td').css('background','#E7C610');
$('tr:nth-child(n+9):nth-child(-n+11) > td').css('background','#C64A08');
$('tr:nth-child(n+12):nth-child(-n+14) > td').css('background','#B43100');
$('tr:nth-child(n+15) > td').css('background','#102173');
$('.none').removeAttr("style");


