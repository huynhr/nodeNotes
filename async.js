console.log('before');

const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('I did something'), 3000);
  })
};

const doSomethingAsyncTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('I did something part 2'), 1000);
  })
};

const doSomething = async function() {
  console.log(await doSomethingAsync());
  console.log(await doSomethingAsyncTwo());
}

doSomething();

console.log('after');
