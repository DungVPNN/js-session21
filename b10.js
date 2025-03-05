let n = parseInt(prompt("Nhập số lượng số nguyên tố cần hiển thị:"), 10);
let result = "";
for (let count = 0, number = 2; count < n; number++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    result += number + " ";
    count++;
  }
}
console.log("Các số nguyên tố đầu tiên: " + result);
