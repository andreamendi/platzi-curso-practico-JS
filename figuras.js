// Variables del cuadrado

//Código del cuadrado
console.group('Cuadrados');

  const ladoCuadrado = 5;
  console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

  const perimetroCuadrado = ladoCuadrado * 4;
  console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);

  const areaCuadrado = ladoCuadrado * ladoCuadrado;
  console.log(`El área del cuadrado es: ${areaCuadrado} cm^2`);

console.groupEnd();



//Código del triángulo

console.group('Triángulos');
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 3;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y la base ${baseTriangulo} cm`);

const alturaTriangulo = 6.5;
console.log(`La altura del triángulo es: ${alturaTriangulo} cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo} cm^2`);

console.groupEnd();



// Código del círculo
console.group('Círculos');

// Radio
const radioCirculo = 5;

// Diámetro
const diametroCirculo = radioCirculo * 2;

// PI
// const PI = 3.14159 
const PI = Math.PI;

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;

// Área
const areaCirculo = 



console.groupEnd();