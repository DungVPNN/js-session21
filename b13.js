const n = 8;

console.log("a)");
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i));
}
console.log("");

console.log("b)");
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i));
}
console.log("");

console.log("c)");
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
console.log("");

console.log("d)");
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(i));
}
