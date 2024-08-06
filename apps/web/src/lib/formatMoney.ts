export function formatMoney(number: number) {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return "Invalid input";
  }

  // Format the number as currency with Philippine Peso sign
  const formattedNumber = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(number);

  return formattedNumber;
}
