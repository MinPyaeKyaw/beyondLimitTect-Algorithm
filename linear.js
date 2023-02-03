function nthTerm(n) {
  return (1.5 * n - 1.5) * (n - 1);
}

for (let i = 1; i < 10; i++) {
  console.log(nthTerm(i));
}
