const fs = require('fs');
const HDWalletProvider = require('truffle-hdwallet-provider');
const secret = JSON.parse( fs.readFileSync('.secrets').toString().trim());


module.exports = {
    networks: {
        sepolia: {
            provider: () => 
            new HDWalletProvider(
                secrets.seed,
                `https://ropsten.infura.io/v3/${secrets.projectID}`

            ),
            network_id : 11155111
        }
    }

};

