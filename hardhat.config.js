'use strict';

// Configure environment variables.
require('dotenv').config();

// Include Babel so that we may use some newer JavaScript syntax.
require('@babel/register');

// Include Waffle with Ethers as our preferred engine for testing.
require('@nomiclabs/hardhat-waffle');

// Include the detailed gas usage reporter for tests.
require('hardhat-gas-reporter');

// Include the contract size output display.
require('hardhat-contract-sizer');

// Include coverage checking for unit tests.
require('solidity-coverage');

// Include the Etherscan contract verifier.
require('@nomiclabs/hardhat-etherscan');

// Retrieve sensitive node and private key details from environment variables.
const INFURA_PROJECT_ID = process.env.INFURA_PROJECT_ID;
const DEPLOYER_PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY;

// Export a configuration for Hardhat to use when working with our contracts.
module.exports = {
	solidity: {
		compilers: [
			{
				version: '0.8.19',
				settings: {
					optimizer: {
						enabled: true,
						runs: 200, 
						details: {
							yul: true 
						}
					}
				}
			}
		]
	},
	networks: {
		mainnet: {
			chainId: 1,
			url: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
			accounts: [ DEPLOYER_PRIVATE_KEY ]
		},
		goerli: {
			chainId: 5,
			url: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
			accounts: [ DEPLOYER_PRIVATE_KEY ]
		},
		sepolia: {
			url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
			chainId: 11155111,
			accounts: [ DEPLOYER_PRIVATE_KEY ]
		}
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false,
	}
};
