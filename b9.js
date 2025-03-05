let num = parseInt(prompt("Nhập vào một số nguyên: "));
if (isNaN(num)) {
  console.log("Bạn chưa nhập số hợp lệ!");
} else {
  let flag = true;
  if (num < 2) {
    flag = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    console.log(num + " là số nguyên tố.");
  } else {
    console.log(num + " không phải là số nguyên tố.");
  }
}
