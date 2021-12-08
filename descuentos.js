// const precioOriginal = 120;
// const descuento = 18;

// Opción 1 y 2
// const coupons = ["cartasdeunlector", "bookeadora", "leyendoando"];


// Opción 3
  const coupons = [
    {
      name: 'Cartas de un Lector',
      code: 'cartasdeunlector',
      discount: 10,
    },
    {
      name: 'Bookeadora',
      code: 'bookeadora',
      discount: 20,
    },
    {
      name: 'Leyendo Ando',
      code: 'leyendoando',
      discount: 15,
    }
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

  // Opción 1

  // switch(couponValue) {
  //   case coupons[0]: //cartasdeunlector
  //     descuento = 10;
  //     console.log('Op1')
  //   break;
  //   case coupons[1]: //bookeadora
  //     descuento = 20;
  //   break;
  //   case coupons[2]: //leyendoando
  //     descuento = 15;
  //   break;
  // }

  // const precioConDescuento = calcularPrecioConDescuento(
  //   priceValue,
  //   descuento
  // );

  // const resultP = document.getElementById("priceFinal");
  //   resultP.innerHTML = `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  //   <div class="card-body">
  //     <h6>Gracias por usar el cupón de ${couponValue} </h6>
  //     <p class="card-text">El precio final ya con descuento es: </p>
  //     <h4 class="card-title">${precioConDescuento}$ USD</h4>
  //   </div>
  // </div>`;






  // Opción 2

  // if (!coupons.includes(couponValue)) {
  //   alert(`El cupón "${couponValue}" no es válido`);
  // } else if (couponValue === "cartasdeunlector") {
  //   descuento = 10;
  //   console.log('Op2')
  // } else if (couponValue === "bookeadora") {
  //   descuento = 20;
  // } else if (couponValue === "leyendoando") {
  //   descuento = 15;
  // }

  // if (!coupons.includes(couponValue)) {
  //   const resultP = document.getElementById("priceFinal");
  //   resultP.innerHTML = `<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  //   <div class="card-body">
  //     <p class="card-text">El precio final es: </p>
  //     <h4 class="card-title">${priceValue}$ USD</h4>
  //   </div>
  // </div>`;
  // } else {
  //   const precioConDescuento = calcularPrecioConDescuento(
  //     priceValue,
  //     descuento
  //   );
  //   const resultP = document.getElementById("priceFinal");
  //   resultP.innerHTML = `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  //   <div class="card-body">
  //     <h6>Gracias por usar el cupón de ${couponValue}</h6>
  //     <p class="card-text">El precio final ya con descuento es: </p>
  //     <h4 class="card-title">${precioConDescuento}$ USD</h4>
  //   </div>
  // </div>`;
  // }




  // Opción 3

  const isCouponValueValid = function(coupon) {
    return coupon.code === couponValue;
  }

  const userCoupon = coupons.find(isCouponValueValid)

  if (!userCoupon) {
    alert(`El cupón "${couponValue}" no es válido`);
    const resultP = document.getElementById("priceFinal");
    resultP.innerHTML = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-body">
        <p class="card-text">El precio final es: </p>
        <h4 class="card-title">${priceValue}$ USD</h4>
      </div>
    </div>`;
  } 
  else {
    const descuento = userCoupon.discount;
    const nombreCupon = userCoupon.name;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  
    const resultP = document.getElementById('priceFinal');
    resultP.innerHTML = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-body">
        <h6>Gracias por usar el cupón de ${nombreCupon}</h6>
        <p class="card-text">El precio final ya con descuento es de:</p>
        <h4 class="card-title">${precioConDescuento}$ USD</h4>
      </div>
    </div>`;

    console.log('op3');
  }




}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })
