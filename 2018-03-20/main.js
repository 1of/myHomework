// ET = 5 ч, АТ = 8 ч // Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. Пример создания экземпляров каждого класса и параметры фигур:

// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами (координаты, размеры, цвет).

// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. В этом классе есть метод add, который и отображает созданные вами фигуры на странице. Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком.

// var drawArea = new Canvas('canvasID');
// drawArea.add(line);
// drawArea.add(circle, rect);
// <canvas id="canvasID"></canvas>
function Canvas(id) {
	if (id === undefined) {
		id = "canvas";
	} 
	else {
		this.id = id;
	}
	$( "body" ).append( "<canvas id=\"" + id + "\" width=\"800\" height=\"500\" style=\"border:1px solid #d3d3d3;\"></canvas>" );
var ctx = document.getElementById( id );
	this.add = function() {
	}
}
	Canvas("canvasid");

function Figure(x, y, color) {
	this.x = 0;
	this.y = 0;
	this.color = "black";
	this.ctx = document.getElementById(id).getContext("2d");
	}
//класс Line
function LineCurve(x, y, x1, y1, x2, y2, color) { //квадратичная кривая
	Figure.call(this, x, y, x2, y2, color);
	this.draw = function(ctx) {
	this.ctx.beginPath();
	this.ctx.strokeStyle = color;
	this.ctx.moveTo(x,y);
	this.ctx.quadraticCurveTo(x1, y1, x2, y2);
	this.ctx.fillStyle = color;
    this.ctx.fill();
	this.ctx.closePath();
	this.ctx.stroke();
	}
	}
//класс Line
function Line(x, y, x2, y2, color) {
	Figure.call(this, x, y, x2, y2, color);
	this.draw = function(ctx) {
	this.ctx.beginPath();
	this.ctx.strokeStyle = color;
	this.ctx.moveTo(x,y);
	this.ctx.lineTo(x2,y2);
	this.ctx.stroke();
	this.ctx.closePath();
	}
	}
//класс Rect
function Rect(x, y, w, h, color) {
	Figure.call(this, x, y, w, h, color);
	var type = arguments[5]; 
	this.draw = function(ctx) {
	this.ctx.beginPath();		
if (type === "fill") {   //залитая фигура
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.fillRect(x, y, w, h);
   	this.ctx.closePath();
    }
else if (type === undefined){ //пустая фигура
	this.ctx.strokeStyle = color;
	this.ctx.stroke();
	this.ctx.strokeRect(x, y, w, h);
	this.ctx.closePath();
}
	}
	}
//класс Circle
function Circle(x, y, r, color) {
	Figure.call(this, x, y, r, color);
	var type = arguments[4]; 
	this.draw = function(ctx) {
	this.ctx.beginPath();
if (type === "fill") {   //залитая фигура
	this.ctx.arc(x, y, r, 0, 2 * Math.PI);
	this.ctx.fillStyle = color;
	this.ctx.fill();
   	this.ctx.closePath();

    }
else if (type === undefined){ //пустая фигура
	this.ctx.arc(x, y, r, 0, 2 * Math.PI);
	this.ctx.strokeStyle = color;
	this.ctx.stroke();
	this.ctx.closePath();

}

	}
	}


var cc = new Circle(420,320,200,"gray",'fill');
var background = new Rect(0,0,800,500,"lightblue", 'fill');
var kp = new LineCurve(250,350,600,650,600,350, "red");
background.draw();
cc.draw();
//линии под углом
for (var i = 0; i <= 15; i++) {
	new Line(800,(i*30),0,0,"magenta").draw();
	new Line(800,0,0,(i*30),"red").draw();
	new Line(0,500,800,(i*30),"blue").draw();
	new Line(800,500,0,(i*30),"green").draw();
}
kp.draw();
//поле зеленое
new Circle(350,250,25,"black",'fill').draw();
new Circle(350,250,10,"white", "fill").draw();
new Circle(475,250,25,"black",'fill').draw();
new Circle(475,250,10,"white",'fill').draw();

for (var i = 0; i <= 35; i++) {
	new Rect(450+i,420+i*0.7,40,40,"pink", 'fill').draw();
}

var snow = setInterval(function() {
 

for (var i = 0;  i <= 10; i++) {
	c1 = Math.floor(Math.random()*800);
	c2 = Math.floor(Math.random()*500);
	function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  var rand = randomInteger(2, 5);
	new Circle(c1,c2,rand,"#"+c1,'fill').draw();
}
}, 500);

setTimeout(function() {
  clearInterval(snow);
}, 5000);

