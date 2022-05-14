const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');

ham.addEventListener('click', ()=>{
  enlaces.classList.toggle('activado');
});

//Square
console.group("Square")

function squarePerimeter(side){
  return side * 4;
}


function squareArea(side){
  return side * side;
}

console.groupEnd();

//Triangle
console.group("Triangle")

function trianglePerimeter (triangleSide1,triangleSide2,triangleSide3){
  return triangleSide1 + triangleSide2 + triangleSide3;
}


function triangleArea(triangleBase, triangleHeight){
  return (triangleBase * triangleHeight)/2;
}
console.groupEnd();


//Circle
console.group("Circle")
//diameter
function circleDiameter(radius){
  return radius * 2;
}
//PI
const PI = Math.PI;

function circumferenceCircle(radius){
  const diameter = circleDiameter(radius);
  return diameter * PI;
}

function circleArea(radius){
  return (radius * radius) * PI;
}


console.groupEnd();

function calculatePerimeterSquare(){
 const input = document.getElementById("InputSquare");
 const value = input.value;

 const perimeter = squarePerimeter(value);

   const ResultSp = document.getElementById("ResultSp");
  ResultSp.innerText = "The perimeter of the square is: " + perimeter + " cm"
}

function calculateAreaSquare(){
const input = document.getElementById("InputSquare")
const value = input.value;

const area = squareArea(value);

  const ResultSa = document.getElementById("ResultSa");
  ResultSa.innerText = "The area of ​​the square is: " + area + " cm²"
}

function calculatePerimeterTriangle(){
 const inputTriangleA = document.getElementById("InputSideA");
 const inputTriangleB = document.getElementById("InputSideB");
 const inputTriangleC = document.getElementById("InputSideC");
 const valueTriangA = parseInt(inputTriangleA.value);
 const valueTriangB = parseInt(inputTriangleB.value);
 const valueTriangC = parseInt(inputTriangleC.value);

 const perimeterTriang = trianglePerimeter(valueTriangA, valueTriangB, valueTriangC);

  const ResultTp = document.getElementById("ResultTp");
  ResultTp.innerText = "The perimeter of the triangle is: " + perimeterTriang + " cm"
}

function calculateAreaTriangle(){
 const inputTriangleD = document.getElementById("InputSideD");
  const inputTriangleE = document.getElementById("InputSideE");
  const valueTriangD = parseInt(inputTriangleD.value);
  const valueTriangE = parseInt(inputTriangleE.value);

   const areaTriang = triangleArea(valueTriangD, valueTriangE);

   const ResultTa = document.getElementById("ResultTa");
   ResultTa.innerText = "The area of ​​the triangle is: " + areaTriang + " cm"
}

function calculatePerimeterCircle(){
 const inputCircle = document.getElementById("InputCircle");
 const valueCircle = parseInt(inputCircle.value);

 const perimeterC = circleDiameter(valueCircle);
   const ResultCp = document.getElementById("ResultCp");
  ResultCp.innerText = "The perimeter of the circle is: " + perimeterC + " cm"
}


function calculateAreaCircle(){
  const inputCircle2 = document.getElementById("InputCircle");
   const valueCircle2 = parseInt(inputCircle2.value);

   const perimeterC2 =Math.round(circleArea(valueCircle2));

   const ResultCa = document.getElementById("ResultCa");
  ResultCa.innerText = "The area of ​​the circle is: " + perimeterC2 + " cm²"
}