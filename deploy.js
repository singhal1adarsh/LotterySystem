const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const{ interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
	'rate toward maze stairs emotion market else sun oppose wheat test tired',
	'https://rinkeby.infura.io/v3/433054c5c4d6479ab270440c3d083d35'
);
const web3 = new Web3(provider);

const deploy = async() =>	{
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy a contract from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(interface))
	.deploy({ data: '0x' + bytecode})
	.send({from: accounts[0]});

	console.log(interface);
	console.log('Contract deployed to', result.options.address);
};
deploy();