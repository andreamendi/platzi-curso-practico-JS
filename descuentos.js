// const precioOriginal = 120;
// const descuento = 18;


const coupons = [
  'cartasdeunlector',
  'bookeadora',
  'leyendoando',
];



function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;


  switch(couponValue) {
    case coupons[0]: //CartasDeUnLector
      descuento = 10;
    break;
    case coupons[1]: //Bookeadora
      descuento = 20;
    break;
    case coupons[2]: //Leyendoando
      descuento = 15;
    break;
  }


  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    descuento
  );

  const resultP = document.getElementById("priceFinal");
  resultP.innerHTML = `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <h6>Gracias por usar el cupón de ${couponValue} </h6>
    <p class="card-text">El precio final ya con descuento es: </p>
    <h4 class="card-title">${precioConDescuento}$ USD</h4>
  </div>
</div>`;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })
