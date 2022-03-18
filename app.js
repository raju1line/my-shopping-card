function clickHhandeler(product, incrise) {
  const prodectConnt = document.getElementById(product + "-number");
  const prodectValue = parseInt(prodectConnt.value);
  let productCount = prodectValue;
  if (incrise == true) {
    productCount = prodectValue + 1;
  } else if (incrise == false && prodectValue > 1) {
    productCount = prodectValue - 1;
  }
  prodectConnt.value = productCount;
  let nitProductPrice = 0;
  if (product == "phone") {
    nitProductPrice = productCount * 1219;
  } else if (product == "case") {
    nitProductPrice = productCount * 59;
  }
  const nitPrice = nitProductPrice;
  document.getElementById(product + "-total").innerText = nitPrice;
}
