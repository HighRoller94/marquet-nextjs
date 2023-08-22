export default function applyDiscount(productPriceStr, discountPercentageStr) {
  try {
    // Convert the input strings to numeric values
    const productPrice = parseFloat(productPriceStr);
    const discountPercentage = parseFloat(discountPercentageStr);

    // Calculate the discounted price
    const discountedAmount = (productPrice * discountPercentage) / 100;
    const finalPrice = productPrice - discountedAmount;

    return finalPrice.toFixed(2);
  } catch (error) {
    return "Invalid input. Please provide valid numbers as strings.";
  }
}
