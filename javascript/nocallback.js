function printString(callbackParam) {
  console.log(callbackParam);
}

function callHello() {
  let value;

  console.log('wait 3 sec.');
  console.log('waiting..');

  setTimeout(() => {
    value = 'Hello';
    return value;
  }, 3000);
}
const r = callHello();
printString(r);
