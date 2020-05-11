console.log('hello, world');

window.ipc.invoke('ipc-example').then((result) => {
  console.log(`receive ipc response: ${result}`);
});
