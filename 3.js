const ethers = require('ethers');
const readline = require('readline-sync');

async function task3() {
  let provider = new ethers.providers.JsonRpcBatchProvider(
    'https://eth-goerli.g.alchemy.com/v2/FY02V0D1h9LCi7Gox4qpJHREU5tNAIaq'
  );
  console.log('Введите хэш транзакции');
  const hash = readline.prompt();

  await provider.getTransaction(hash).then(console.log);
}

task3();
