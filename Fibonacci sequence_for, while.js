// 시완

let a = 1;
console.log (a);

let b = 1;
console.log (b);

let c = a + b;
console.log (c);

function fibonacci (i) {
  a = b;
  b = c;
  c = a + b;
  console.log (c);
}

for (let i = 1; i <= 47; i++) {
  fibonacci (i);
}