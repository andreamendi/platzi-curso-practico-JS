// const lista1 = [
//   100,
//   200,
//   300,
//   500,
// ];

// let sumaLista1 = 0;

// for (let i = 0; i <lista1.length; i++) {
//   //lista1[i], la posisión de i dentro de la lista.
//   sumaLista1 = sumaLista1 + lista1[i];
// }

// const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i <lista.length; i++) {
  //   //lista1[i], la posisión de i dentro de la lista.
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  ); //Va a recibir como parámetro, una función y lo que va a hacer es ir sumando cada uno de los elementos.


  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}