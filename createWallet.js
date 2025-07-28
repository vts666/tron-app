const { TronWeb } = require('tronweb');

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io'
});

(async () => {
    const walletA = await tronWeb.createAccount();
    const walletB = await tronWeb.createAccount();

    console.log('Wallet A:', walletA);
    console.log('Wallet B:', walletB);
})();
