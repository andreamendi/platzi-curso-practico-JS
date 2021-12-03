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
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const baseTriangulo = 3;
// console.log(`Los lados del triángulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm y la base ${baseTriangulo} cm`);

// const alturaTriangulo = 6.5;
// console.log(`La altura del triángulo es: ${alturaTriangulo} cm`); 

function perimetroTriangulo (lado1, lado2, base) {
  const perimetro = lado1 + lado2 + base;
  return perimetro;
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






// Empieza la interacción con el HTML


// Cuadrado
function activarPerimetroCuadrado (){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = Math.floor(perimetroCuadrado(value));
  const res = document.getElementById("resultadoCuadrado").innerHTML = `¡Genial!, el <i>perímetro</i> de tu cuadrado es ${perimetro} cm`;
  return res;
    
  // alert(`¡Genial!, el perímetro de tu cuadrado es ${perimetro}cm`);
};

function activarAreaCuadrado(){
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = Math.floor(areaCuadrado(value));
  const res = document.getElementById("resultadoCuadrado").innerHTML = `¡Genial!, el <i>área</i> de tu cuadrado es ${area} cm<sup>2</sup>`;
  return res;
  // alert(`¡Genial!, el área de tu cuadrado es ${area}cm^2`);             
};


//Círculo

// Diámetro
function activarDiametroCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value; //Aquí estamos recibiendo el rádio

  const diametro = Math.floor(diametroCirculo(value));
  const res = document.getElementById("resultadoCirculo").innerHTML = `¡Genial!, el <i>diámetro</i> de tu círculo es ${diametro} cm`;
  return res;
};


// Circunferencia
function activarCircunferenciaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value; //Aquí estamos recibiendo el rádio

  const circunferencia = Math.floor(perimetroCirculo(value));
  const res = document.getElementById("resultadoCirculo").innerHTML = `¡Genial!, la <i>circunferencia</i> de tu círculo es ${circunferencia} cm`;
  return res;
};


// Área
function activarAreaCirculo(){
  const input = document.getElementById("InputCirculo");
  const value = input.value; //Aquí estamos recibiendo el rádio

  const area = Math.floor(areaCirculo(value));
  const res = document.getElementById("resultadoCirculo").innerHTML = `¡Genial!, el <i>área</i> de tu círculo es ${area} cm<sup>2</sup>`;
  return res;
};



// Tríangulos

// Perímetro
function activarPerimetroTriangulo(){
  const inputUno = document.getElementById("InputTrianguloUno");
  const inputDos = document.getElementById("InputTrianguloDos");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueUno = Number(inputUno.value); //Aquí estamos recibiendo el lado 1
  const valueDos = Number(inputDos.value); //Aquí estamos recibiendo el lado 1
  const valueBase = Number(inputBase.value); //Aquí estamos recibiendo la base

  const tipoTriangulo = activarEsUnTriangulo(valueUno,valueDos,valueBase);
  const perimetro = Math.floor(perimetroTriangulo(valueUno,valueDos,valueBase));
  const res = document.getElementById("resultadoTriangulo").innerHTML = `¡Genial!, el <i>perímetro</i> de tu triángulo es ${perimetro} cm`;
  return res + tipoTriangulo;
};


// Área
function activarAreaTriangulo(){
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueAltura = Number(inputAltura.value); //Aquí estamos recibiendo la altura
  const valueBase = Number(inputBase.value); //Aquí estamos recibiendo la base

  const area = Math.floor(areaTriangulo(valueAltura,valueBase));
  const res = document.getElementById("resultadoTriangulo").innerHTML = `¡Genial!, el <i>área</i> de tu triángulo es ${area} cm<sup>2</sup>`;
  return res;
};

function activarEsUnTriangulo(lado1, lado2, lado3){
  let tipoTriangulo;

  if((lado1 === lado2)&&(lado2 === lado3)) {
    tipoTriangulo = 'Equilatero';
  }
  else if(((lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3))) {
    tipoTriangulo = 'Escaleno';
  } 
  else if((lado1 === lado2) && ((lado2 != lado3) && (lado1 != lado3))) {
    
    const ladoAlCuadrado = Math.pow(lado1, 2)
    const baseAlCuadrado = Math.pow(lado3, 2)
    const alturaIsosceles = Math.floor(Math.sqrt(ladoAlCuadrado - (baseAlCuadrado / 4)));
    tipoTriangulo = `Isósceles y tiene una altura de ${alturaIsosceles} cm`;

  }
  const resTipoTriangulo = document.getElementById("TrianguloEsTipo").innerHTML = `Tu triángulo es tipo  ${tipoTriangulo}, por sus lados. No por sus ángulos.`;
  return resTipoTriangulo;
};