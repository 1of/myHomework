var userData = prompt('Введите количество МБ:', '');
var _BYTE = 1024;
var byte = userData * (_BYTE*_BYTE);   //из МБ в байты
var kbyte = userData * _BYTE;          //из МБ в килобайты
var gbyte = userData / _BYTE;          //из МБ в гигабайты
alert(userData + " МБ - это: \n" + byte + " байт" + "\n" + kbyte + " килобайт" + "\n" + gbyte + " гигабайт"); 


var apples = prompt('У Чжуан-цзы было яблок:', '');
var leftApples = prompt('Цзэн-Цзы съел несколько:', '');
var amount = apples - leftApples;
var isApple = confirm("Чжуан-цзы утверждает, что Цзэн-Цзы съел все, дайте ответ правда это или ложь? (правда - ОК, ложь - Отмена)");
if (amount > 1 && isApple == true) {
	alert("Чжуан-цзы Врет, т.к. у него еще остаслось " + amount + " яблока.");
}
else if (amount <= 1 && isApple == false)
{
	alert("Чжуан-цзы говорит Правду, т.к. у него НЕ остаслось яблок." + " Кроме того Цзэн-Цзы сьел на" + amount + " яблока больше");
}
else if (amount < 1 && isApple == true)
{
	alert("Это ПРАВИЛЬНО. Чжуан-цзы говорит Правду, т.к. у него НЕ остаслось яблок. Кроме того Цзен Цзы сьел на " + amount + "яблок больше, чем у него было =)");
}
else if (amount > 1 && isApple == false)
{
	alert("Это ложь. т.к. у Чжуан-цзы него еще остаслось" + amount + " яблок.");
}

/*На сайте есть три колонки разной высоты, заданной в единицах измерения веб (значения вводятся в prompt в формате “50px”, “20px”...). Используя функцию из библиотеки Math, найдите наибольшее значение из трех и покажите его. Учтите, что Math.max не работает со строками.*/
var col_1 = prompt('Введите высоту 1-й колонки в формате(“50px”, “20px” ...)', '');
var col_2 = prompt('Введите высоту 2-й колонки в формате(“50px”, “20px” ...)', '');
var col_3 = prompt('Введите высоту 3-й колонки в формате(“50px”, “20px” ...)', '');
col_1 = parseInt(col_1, 10);
col_2 = parseInt(col_2, 10);
col_3 = parseInt(col_3, 10);
var max_height = Math.max(col_1, col_2, col_3) + " px";
alert("Наибольшее значение: " + max_height);

/*Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения. */
var rand = Math.floor (Math.random()*100);
var rand_input = prompt('Введите любое число: ', '');
if (rand > rand_input) {
	alert("Случайное число > введенного Вами \n" + rand + ">"+ rand_input)
}
else if (rand < rand_input) {
	alert("Случайное число < введенного Вами \n" + rand + "<"+ rand_input)
}
else if (rand == rand_input) {
	alert("Случайное число = введенного Вами \n" + rand + "="+ rand_input)
}
/*Решение предыдущей задачи запишите в одну строку и отобразите в alert*/

var x = Math.floor (Math.random()*100), y = prompt('Введите любое число: ', '');
alert("x < y = " + (x < y) + ", x = " + x + ", y = " + y);