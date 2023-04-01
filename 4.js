const ethers = require('ethers');
const readline = require('readline-sync');

async function task4() {
  let provider = new ethers.providers.JsonRpcBatchProvider(
    'https://eth-goerli.g.alchemy.com/v2/FY02V0D1h9LCi7Gox4qpJHREU5tNAIaq'
  );

  let transactionRequest = {};
  console.log('Введите адрес отправителя');
  transactionRequest.from = readline.prompt();
  console.log('Введите адрес получателя');
  transactionRequest.to = readline.prompt();
  console.log('Введите количество эфира');
  transactionRequest.value = readline.prompt();
  console.log('Вы вызываете функцию контракта? 1 - да');
  const choice = readline.prompt();
  if (choice === '1') {
    console.log('Введите данные для вызова контракта');
    transactionRequest.data = readline.prompt();
  }

  const feedata = await provider.getFeeData();
  transactionRequest.maxFeePerGas = feedata.maxFeePerGas;
  transactionRequest.maxPrioretyFeePerGas = feedata.maxPriorityFeePerGas;
  transactionRequest.chainId = (await provider.getNetwork()).chainId;
  transactionRequest.nonce = await provider.getTransactionCount(transactionRequest.from);
  console.log(transactionRequest);

  await provider.estimateGas(transactionRequest).then(console.log);
}

task4();
