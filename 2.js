const ethers = require('ethers');
const readline = require('readline-sync');

async function task2() {
  let provider = new ethers.providers.JsonRpcBatchProvider('http://127.0.0.1:7545');
  console.log('инфо о Ganache:');
  await provider.listAccounts().then(list => {
    console.log('список аккаунтов: \n', list);
  });
  await provider.getNetwork().then(network => {
    console.log('информация о сети: \n', network);
  });
  await provider.getBlockNumber().then(blockNumber => {
    console.log('номер последнего блока: \n', blockNumber);
  });
  await provider.getGasPrice().then(gasPrice => {
    console.log('стоимость газа: \n', gasPrice);
  });

  console.log('\n\n Укажите сеть:');
  network = readline.prompt();
  console.log('Укажите API ключ:');
  const key = readline.prompt();
  provider = new ethers.providers.AlchemyProvider(network, key);

  console.log('\n инфо о Alchemy:');
  await provider.listAccounts().then(list => {
    console.log('список аккаунтов: \n', list);
  });
  await provider.getNetwork().then(network => {
    console.log('информация о сети: \n', network);
  });
  await provider.getBlockNumber().then(blockNumber => {
    console.log('номер последнего блока: \n', blockNumber);
  });
  await provider.getGasPrice().then(gasPrice => {
    console.log('стоимость газа: \n', gasPrice);
  });
}

task2();
