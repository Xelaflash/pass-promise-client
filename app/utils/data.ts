export async function getData() {
  await sleep(1500);
  return {
    name: 'John Doe',
    age: 20,
    email: 'john.doe@example.com',
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
