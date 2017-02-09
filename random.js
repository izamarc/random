var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createRandomScene() {
makeRect(0,0,200,200,"white")
makeCircle(120,40,10,"yellow",0.8)
makeRect(117,50,7,50,"green",0.6)
makeCircle(106,50,10,"red",0.8)
makeCircle(103,35,10,"red",0.8)
makeCircle(114,23,10,"red",0.8)
makeCircle(130,27,10,"red",0.8)
makeCircle(134,42,10,"red",0.8)
makeCircle(122,54,10,"red",0.8)
makeEllipse(70, 75, 15, 6,"black")
makeCircle(60,65,10,"indigo",0.6)
makeCircle(78,65,10,"indigo",0.6)
makeCircle(60,60,10,"indigo",0.6)
makeCircle(78,60,10,"indigo",0.6)
makeCircle(40,20,10,"blue",0.2)
makeCircle(60,20,10,"blue",0.2)
makeCircle(50,10,10,"blue",0.2)
makeCircle(50,24,10,"blue",0.2)
makeCircle(100,10,10,"blue",0.2)
makeCircle(85,10,10,"blue",0.2)
makeCircle(90,20,10,"blue",0.2)
makeText("Happy Spring", 60, 90, 15, "sans-serif", "blue", 0.8)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
makeRect(0,0,200,200,"white")
makeCircle(60,40,20,"black")
makeCircle(40,25,10,"black")
makeCircle(79,25,10,"black")
makeEllipse(55,35,5,8,"white")
makeEllipse(66,35,5,8,"white")
makeEllipse(67,35,3,5,"black")
makeEllipse(56,35,3,5,"black")
makeEllipse(60,50,6,3,"white")
makeCircle(52,70,9,"red")
makeCircle(69,70,9,"red")
makePolygon("59,100 42,70 79,70","red")
makeCircle(47,80,2,"black")
makeCircle(48,83,2,"black")
makeCircle(50,86,2,"black")
makeCircle(52,89,2,"black")
makeCircle(54,92,2,"black")
makeCircle(56,95,2,"black")
makeCircle(58,98,2,"black")
makeCircle(61,96,2,"black")
makeCircle(63,93,2,"black")
makeCircle(65,90,2,"black")
makeCircle(67,87,2,"black")
makeCircle(69,84,2,"black")
makeCircle(71,81,2,"black")
makeCircle(73,78,2,"black")
makeCircle(75,75,2,"black")
makeCircle(77,72,2,"black")
makeCircle(78,69,2,"black")
makeCircle(77,66,2,"black")
makeCircle(75,63,2,"black")
makeCircle(72,62,2,"black")
makeCircle(69,62,2,"black")
makeCircle(66,63,2,"black")
makeCircle(63,65,2,"black")
makeCircle(60,67,2,"black")
makeCircle(58,65,2,"black")
makeCircle(55,63,2,"black")
makeCircle(52,62,2,"black")
makeCircle(49,62,2,"black")
makeCircle(47,64,2,"black")
makeCircle(45,66,2,"black")
makeCircle(44,69,2,"black")
makeCircle(44,72,2,"black")
makeCircle(45,75,2,"black")
makeCircle(46,78,2,"black")
makeCircle(125,40,20,"black")
makeCircle(105,25,10,"black")
makeCircle(145,25,10,"black")
makeEllipse(120,35,5,8,"white")
makeEllipse(131,35,5,8,"white")
makeEllipse(130,35,3,5,"black")
makeEllipse(119,35,3,5,"black")
makeEllipse(125,50,6,3,"pink",0.8)
makeCircle(118,70,9,"pink")
makeCircle(135,70,9,"pink")
makePolygon("108,72 145,72 126,100","pink")
makeCircle(115,62,2,"black")
makeCircle(118,62,2,"black")
makeCircle(121,63,2,"black")
makeCircle(124,64,2,"black")
makeCircle(127,66,2,"black")
makeCircle(130,64,2,"black")
makeCircle(133,63,2,"black")
makeCircle(136,62,2,"black")
makeCircle(139,62,2,"black")
makeCircle(142,64,2,"black")
makeCircle(144,67,2,"black")
makeCircle(144,70,2,"black")
makeCircle(143,73,2,"black")
makeCircle(142,76,2,"black")
makeCircle(140,79,2,"black")
makeCircle(138,82,2,"black")
makeCircle(136,85,2,"black")
makeCircle(134,88,2,"black")
makeCircle(132,91,2,"black")
makeCircle(130,94,2,"black")
makeCircle(128,97,2,"black")
makeCircle(126,98,2,"black")
makeCircle(124,96,2,"black")
makeCircle(122,93,2,"black")
makeCircle(120,90,2,"black")
makeCircle(118,87,2,"black")
makeCircle(116,84,2,"black")
makeCircle(114,81,2,"black")
makeCircle(112,78,2,"black")
makeCircle(110,75,2,"black")
makeCircle(109,72,2,"black")
makeCircle(110,69,2,"black")
makeCircle(111,66,2,"black")
makeCircle(113,64,2,"black")
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeRect(0,0,200,200,"white")
makeRect(20,30,35,70,"black",0.4)
makeRect(27,68,20,30,"white",0.6)
makeCircle(28,40,8,"white")
makeCircle(43,40,8,"white")
makeCircle(27,40,4,"black")
makeCircle(41,40,4,"black")
makePolygon("35,45 20,65 45,60", "orange", 0.8)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    alert(myNumber)
    // If the number is less than 0.33, call the function to create your first scene.
    if(myNumber < 0.33){
    createFirstScene();
    }else if(myNumber < 0.67){
    // Else, if the number is less than 0.67, call the function to create your second scene.
    createSecondScene();
    }else{
    // Else, call the function to create your third scene.
    createThirdScene();
    }
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}