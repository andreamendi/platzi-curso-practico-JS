// Helpers / Utils
// Así se les llama a las funciones que no son parte de la lógica del "análisis" pero las necesitamos para los calculos.

function esPar(numero) {
  return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  const promedioLista = sumaLista / lista.length;
  // console.log(`promedioLista ${promedioLista}`)
  return promedioLista;
}


// Calculadora de Mediana
function medianaSalarios(lista) {
  // console.log(`Lista ${lista}`)

  const mitad = parseInt(lista.length / 2);
  // console.log(`Lista.length ${lista.length}`)
  // console.log(`Mitad ${mitad}`)

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    // console.log(`personaMitad2 ${personaMitad2}`)
    // console.log(`personaMitad1 ${personaMitad1}`)
    
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    // console.log(`mediana ${mediana}`)
    return mediana;
    
  } else {
    const personaMitad = lista[mitad];
    // console.log(`personaMitad ${personaMitad}`)
    return personaMitad;
  }
}


// MEDIANA GENERAL
// Aquí se está haciendo un array con solo los salarios
const salaryMex = mexico.map(
  function (persona) {
      return persona.salary;
  }
);

const salaryMexSorted = salaryMex.sort(
  function (salaryA, salaryB) {
    // console.log(`La resta del salario ${ salaryA - salaryB}`)
    return salaryA - salaryB;
  }
); 


// Mediana top 10%
(p  * (90))
const spliceStart = (salaryMexSorted.length * 90) / 100;
const spliceCount = salaryMexSorted.length - spliceStart;


const salariosMexTop10 = salaryMexSorted.splice(spliceStart, )
// El métoso "Splice" recibe dos argumentos. La primera posición es dónde queremos hacer el corte. Cuántos pedazos queremos que salgan. 



const medianaGeneralMex= medianaSalarios(salaryMex)
console.log({
  medianaGeneralMex,
  medianaTop10Mex
}
)