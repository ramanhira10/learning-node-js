function delayFn(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function delayGreet(name) {
  await delayFn(2000);
  console.log(name);

}

delayGreet('Raman');

async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed');
    }
    const result = num1 / num2;
    console.log(`Result: ${result}`);
  } catch (err) {
    console.log('Error:', err);
  }
}

async function mainFn() {
  console.log(await division(10, 2));
  console.log(await division(10, 0));

}

mainFn();