// Variables del cuadrado

//Código del cuadrado
console.group('Cuadrados');

  // const ladoCuadrado = 5;
  // console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

  function perimetroCuadrado(lado) {
    return lado * 4; 
  } 
  // console.log(`El perímetro del cuadrado es: ${perimetroCuadrado} cm`);


  function areaCuadrado(lado) {
    return lado * lado;
  } 

console.groupEnd();



//Código del triángulo

console.group('Triángulos');
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 3;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y la base ${baseTriangulo} cm`);

// const alturaTriangulo = 6.5;
// console.log(`La altura del triángulo es: ${alturaTriangulo} cm`); 

function perimetroTriangulo (lado1, lado2, base) {
  return lado1 + lado2 + base;
};
// console.log(`El perímetro del triángulo es: ${perimetroTriangulo} cm`);


function areaTriangulo (base, altura){
  return (base * altura) / 2;
};

console.groupEnd();



// Código del círculo
console.group('Círculos');

// Radio
// const radioCirculo = 5;
// console.log(`El Radio del círculo es: ${radioCirculo} cm^2`);

// Diámetro
function diametroCirculo (radio){
  return radio * 2;
};
// console.log(`El diametro del círculo es: ${diametroCirculo} cm^2`);


// PI
// const PI = 3.14159 
const PI = Math.PI;
console.log(`El pi del círculo es: ${PI} cm^2`);

// Circunferencia
function perimetroCirculo (radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo (radio){
  return (radio * radio) * PI
}



console.groupEnd();