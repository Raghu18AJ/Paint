var paintcanvas = document.getElementById("canvas1");
var context = paintcanvas.getContext("2d");
var color = "black";
var radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
var isPainting = false;

function startPaint() {
isPainting = true;
}

function endPaint() {
 isPainting = false;
}

function doPaint(x, y) {
  if (isPainting == true) {
    paintCircle(x, y);
  }
}

function setWidth(value) {
  var ccan1 = document.getElementById("canvas1");
  if (value.isNumeric == true);
  ccan1.width = value;
}
function setHeight(value) {
  var ccan1 = document.getElementById("canvas1");
  if (value.isNumeric == true);
  ccan1.height = value;
}

function clearCanvas() {
  context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle(x, y) {
  // make sure to start a new circle each time
  context.beginPath();
  // draw circle using a complete (2*PI) arc around given point
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = color;
  context.fill();
}
// verify the given value is actually a number
function isNumeric(value) {
  // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
  return !isNaN(value);
}

function changeColor(newColor) {
  color = newColor;
}
function resizeBrush(newSize) {
  radius = newSize;
  document.getElementById("sizeOutput").value = newSize;
}