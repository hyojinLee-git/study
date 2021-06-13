function callString(callbackParam) {
  console.log(callbackParam);
}
function printString(callbackParam) {
  console.log(callbackParam);
}
function callPrint(callback) {
  let value;

  console.log('wait 3sec...');
  console.log('waiting..');

  setTimeout(() => {
    value = 'Hello';
    callback(value);
  }, 3000);
}
callPrint(printString);
