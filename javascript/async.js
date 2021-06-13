//async & await
//clear style of using promise

//1. async
async function fetchUser() {
  //do network request in 10secs...

  return 'ellie';
}
const user = fetchUser();

console.log(user);

//2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(3000);
  return 'apple';
}
async function getBanana() {
  await delay(2000);
  return 'banana';
}
//Promise로 작성한 코드
// function getBanana(){
//     return delay(3000)
//     .then(()=>'banana')
// }

//Promise hell
// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${banana}+${apple}`);
//   });
// }

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple}+${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
