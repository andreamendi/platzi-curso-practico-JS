// const precioOriginal = 120;
// const descuento = 18;




function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );
  const resultP = document.getElementById("priceFinal");
  resultP.innerHTML = `
  <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-body">
    <p class="card-text">El precio final ya con descuento es: </p>
    <h5 class="card-title">${precioConDescuento}$ USD</h5>
  </div>
</div>.

  
`;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// })
