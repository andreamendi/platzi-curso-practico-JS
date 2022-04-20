function activarSepararPorCategorias(){
  const input = document.getElementById("InputIngreso");
  const income = input.value;

  console.log(income)
  alert(`Tu Ingreso ha sido registrado "$${income}", ahora abajo coloca cuando le pones a cada categoría.`);
}

function capturarPorcentajesCategorias(){
  var totalCategoria = 1;
  var porcenVivienda = 0;
  var cVivienda = 0;

  var porcenAlimentacion = 0;
  var cAlimentacion = 0;
  var porcenTransporte = 0;
  var cTransporte = 0;
  var porcenServicios = 0;
  var cServicios = 0;
  var porcenGastosPersonales = 0;
  var cGastosPersonales = 0;
  var porcenEntretenimiento = 0;
  var cEntretenimiento = 0;
  var porcenSalud = 0;
  var cSalud = 0;
  var porcenRopa = 0;
  var cRopa = 0;
  var porcenEduacion = 0;
  var cEduacion = 0;
  var porcenInversion = 0;
  var cInversion = 0;
  var alerta = 0;





  console.log('estoy afuera del for')
  
  while (totalCategoria >= 1 && totalCategoria < 100){
  // for(i = 0; i > 100;){
    totalCategoria = 0;
    console.log('estoy dentro del for')
    porcenVivienda = document.getElementById("input_viviendaPorcentaje");
    cVivienda = Number(porcenVivienda.value);

    porcenAlimentacion = document.getElementById("input_alimentacionPorcentaje");
    cAlimentacion = Number(porcenAlimentacion.value);

    porcenTransporte = document.getElementById("input_transportePorcentaje");
    cTransporte = Number(porcenTransporte.value);

    porcenServicios = document.getElementById("input_serviciosPorcentaje");
    cServicios = Number(porcenServicios.value);

    porcenGastosPersonales = document.getElementById("input_gastosPersonalesPorcentaje");
    cGastosPersonales = Number(porcenGastosPersonales.value);

    porcenEntretenimiento = document.getElementById("input_entrenimientoPorcentaje");
    cEntretenimiento = Number(porcenEntretenimiento.value);

    porcenSalud = document.getElementById("input_saludPorcentaje");
    cSalud = Number(porcenSalud.value);

    porcenRopa = document.getElementById("input_ropaPorcentaje");
    cRopa = Number(porcenRopa.value);

    porcenEduacion = document.getElementById("input_educacionPorcentaje");
    cEduacion = Number(porcenEduacion.value);

    porcenInversion = document.getElementById("input_inversionPorcentaje");
    cInversion = Number(porcenInversion.value);

    console.log(cVivienda)
    console.log(cAlimentacion)
    console.log(cTransporte)
    console.log(cServicios)
    console.log(cGastosPersonales)
    console.log(cEntretenimiento)
    console.log(cSalud)
    console.log(cRopa)
    console.log(cEduacion)
    console.log(cInversion)
    
    console.log(totalCategoria)
    // totalCategoria = cVivienda;
    totalCategoria = cVivienda + cAlimentacion + cTransporte + cServicios + cGastosPersonales + cEntretenimiento +cSalud + cRopa + cEduacion + cInversion;
    console.log(totalCategoria)
    i = totalCategoria;
    if (i > 100){
      alerta = document.getElementById('alertaCategorias');
      alerta.innerHTML = `
      <div class="card text-dark bg-warning text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">UPS!</h5>
          <p class="card-text">Es más del 100% de tus ingresos, te pasas por <b>${totalCategoria - 100}%</b></p>
        </div>
      </div>`;
      // alert(`Es más del 100% de tus ingresos, te pasas por ${totalCategoria - 100}%`)
    } if(i == 0) {
      alerta = document.getElementById('alertaCategorias');
      alerta.innerHTML = `
      <div class="card text-dark bg-warning text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">UPS!</h5>
          <p class="card-text">No es posible generar un presupuesto sin porcentajes en las categorías.</p>
        </div>
      </div>`;
      // alert(`No es posible generar un presupuesto sin porcentajes en las categorías.`)
    } 
    if (i >= 1 && i < 100) {
      alerta = document.getElementById('alertaCategorias');
      alerta.innerHTML = `
      <div class="card text-white bg-success text-center" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Yey!</h5>
          <p class="card-text">El porcentaje total que tomarás de tus ingresos es de <b>${totalCategoria}%</b></p>
        </div>
      </div>`;
      // alert(`El porcentaje es de que total que tomarás de tus categorías es de ${totalCategoria}%`)
      break;
    }
    console.log(totalCategoria)
  }
}















