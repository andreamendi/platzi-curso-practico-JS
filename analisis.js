// import { colombia } from "./salarios";

// const salariosCol = colombia.map(
//   function (personita) {
//     return personita.salary;
//   }
// );

// const salariosColSorted = salariosCol.sort(
//   function (salaryA, salaryB) {
//     return salaryA - salaryB;
//   }
// );

// function esPar(numerito) {
//   return (numerito % 2 === 0);
// }

// function calcularMediaAritmetica(lista) {
//   const sumaLista = lista.reduce(
//     function (valorAcumulado = 0, nuevoElemento) {
//       return valorAcumulado + nuevoElemento;
//     }
//   );
//   const promedioLista = sumaLista / lista.length;
//   return promedioLista;
// }
// function medianaSalarios(lista) {
//   const mitad = parseInt(lista.length / 2);

//   if (esPar(lista.length)) {
//     const personitaMitad1 = lista[mitad - 1];
//     const personitaMitad2 = lista[mitad];

//     const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
//     return mediana;
//   } else {
//     const personitaMitad = lista[mitad];
//     return personitaMitad;
//   }
// }

// console.log(
//   medianaSalarios(`La mediana de los salarios es de: ${salariosColSorted}`)
// )

















// Aquí se está haciendo un array con solo los salarios
const salariosMex = mexico.map(
  function (persona) {
      return persona.salary;
  }
);

const salariosMexSorted = salariosMex.sort(
  function (salaryA, salaryB) {
    // console.log(`La resta del salario ${ salaryA - salaryB}`)
    return salaryA - salaryB;
  }
); 

function esPar(numero) {
  return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  const promedioLista = sumaLista / lista.length;
  console.log(`Es el promedioLista ${promedioLista}`)
  return promedioLista;
}

function medianaSalarios(lista) {
  console.log(`Es el mitad ${lista}`)

  const mitad = parseInt(lista.length / 2);
  console.log(`Es el ista.length ${lista.length}`)
  console.log(`Es el mitad ${mitad}`)

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    console.log(`Es el personaMitad2 ${personaMitad2}`)
    console.log(`Es el personaMitad1 ${personaMitad1}`)
    
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    console.log(`Es el mediana ${mediana}`)
    return mediana;
    
  } else {
    const personaMitad = lista[mitad];
    console.log(`Es el personaMitad ${personaMitad}`)
    return personaMitad;
  }
}
console.log(
  medianaSalarios(salariosMex)
)