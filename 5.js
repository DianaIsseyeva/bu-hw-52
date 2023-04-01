const ethers = require('ethers');
const readline = require('readline-sync');

async function task5() {
  let provider = new ethers.providers.JsonRpcBatchProvider(
    'https://eth-goerli.g.alchemy.com/v2/FY02V0D1h9LCi7Gox4qpJHREU5tNAIaq'
  );
  console.log('Введите номер блока');
  const blockNumber = parseInt(readline.prompt());

  let transactions = (await provider.getBlockWithTransactions(blockNumber)).transactions;
  let maxValue = 0;
  let maxTx = 0;
  for (tx of transactions) {
    if (tx.value > maxValue) {
      maxValue = tx.value;
      maxTx = tx;
    }
  }
  console.log(maxTx);
}

task5();
