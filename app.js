function exec() {
  const count = parseInt(prompt('Numero N nella sequenza.. ', 5));

  document.getElementById('num').innerHTML = `[ ${count} ]`;
  document.getElementById('solution').innerHTML = `il ${count}' numero della sequenza è ${recursiveFib(count)}`;
}

function recursiveFib(num) {
  if (num < 0) {
    document.getElementById('solution').innerHTML = 'invalid input'
    return -1;
  } else if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    fib = recursiveFib(num - 1) + recursiveFib(num - 2)
    return fib
  }
}
