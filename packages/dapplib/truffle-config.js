require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remain essay hover arctic swift gasp'; 
let testAccounts = [
"0xe70c7fa158135e87a1c8f35654b93b4d78e9ef7fffb82c9899c204b98c5668ab",
"0xb4aa82d6730b98d48914f04b62ecfe99a47e6601217f3ecbb2e2e6af750fade5",
"0xf879e06e97892c243b831338e39273bcd5c0e24089687f1524189f30212933a4",
"0x3d815f1dfc9a234fcdaa7ce64ea9d651766669fc355205e160a2eafe1736905f",
"0x53c5b092696f81dc58ecbf840d9106320e7482e44425d1ef2882a54225bfd09a",
"0x7f3656cc08d5bf9e991a9fd9b4fe08e2f71a8a4c5b4c4fed18fd7fc9f8d4dff7",
"0xc814e712d3b2a167baa47d41516244eaf02bd480a2cb81cb9d31b67832ab6e59",
"0x30d2eeddf3d83e197334d0077f05e763e8150e9905ae2fbb283f9c822fdfaf94",
"0xf7224cff5ec106479e39a2ed838a1ee85f0238a64ef8d715b7aac37a2cc0495a",
"0x1b3932b945d657c83b3a66ed0e70b3243c1dfb3e01d63fe579c3bf0db132bbd9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
