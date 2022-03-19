function clickHhandeler(product, incrise) {
  const prodectConnt = document.getElementById(product + "-number");
  const prodectValue = parseInt(prodectConnt.value);
  let productCount = prodectValue;
  if (incrise == true) {
    productCount = prodectValue + 1;
  } else if (incrise == false && prodectValue > 0) {
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
  productCalculator();
}
function productCalculator() {
  const phoneTotal = totalCalculator("phone");
  const caseTotal = totalCalculator("case");
  const productTotalPrice = phoneTotal * 1219 + caseTotal * 59;
  console.log(productTotalPrice);
  document.getElementById("sub-total").innerText = productTotalPrice;
}
function totalCalculator(product) {
  const productlPrice = document.getElementById(product + "-number");
  const total = parseInt(productlPrice.value);
  return total;
}
