const ethers = require('ethers');
const readline = require('readline-sync');
async function task1() {
  let provider;
  let network;
  console.log(`Выберите провайдер?
  1. провайдер по умлочанию
  2. RPC провайдер
  3. API провайдер
  `);
  let choice = readline.prompt();
  if (choice === '1') {
    console.log('Укажите сеть:');
    network = readline.prompt();
    provider = ethers.getDefaultProvider(network);
  } else if (choice === '2') {
    console.log('Укажите точку подключения:');
    network = readline.prompt();
    provider = new ethers.providers.JsonRpcBatchProvider(network);
  } else if (choice === '3') {
    console.log('Укажите поставщика API:');
    const api = readline.prompt();
    console.log('Укажите сеть:');
    network = readline.prompt();
    console.log('Укажите API ключ:');
    const key = readline.prompt();
    if (api === 'Alchemy') {
      provider = new ethers.providers.AlchemyProvider(network, key);
    }
  }
  console.log(await provider.getBlockNumber());
}

task1();
