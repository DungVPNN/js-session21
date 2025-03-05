let p = parseFloat(prompt("Nhập số tiền gửi ban đầu:"));
let r = parseFloat(prompt("Nhập lãi suất hàng tháng (%):")) / 100;
let m = parseInt(prompt("Nhập số tháng gửi:"));

let total = p;
for (let i = 1; i <= m; i++) {
    total *= (1 + r);
}
let interest = total - p;
console.log("Tiền lãi: " + interest);
console.log("Tiền nhận được: " + total);
