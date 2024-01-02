export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = { name: 'cxd', age: 18 };
      console.log('server send', data);
      resolve(data);
    }, 3000);
  });
}
