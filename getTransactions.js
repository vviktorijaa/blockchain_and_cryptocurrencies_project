Moralis.initialize("g2pduJTFfs0pQVywf2mDPebTRK8L35CGaBBvHiWk");
Moralis.serverURL = "https://t1qcvos9rbvt.grandmoralis.com:2053/server";

function initialize() {
    Moralis.start({
        serverUrl: "https://t1qcvos9rbvt.grandmoralis.com:2053/server",
        appId: "g2pduJTFfs0pQVywf2mDPebTRK8L35CGaBBvHiWk"
    })
}

async function getTransactions(){
    initialize();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    const options = {
        chain: chain,
        address: address
    };

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const getTransactions = await Moralis.Web3.getTransactions(options);
        document.getElementById('addressTransactions').style.visibility = 'visible';
        document.getElementById('addressValue').innerHTML = address;
        document.getElementById('chainValue').innerHTML = chain;
        document.getElementById('totalTransactions').innerText = getTransactions.total;
        console.log(getTransactions.total);
        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
}

async function getNfts() { //TODO: does not work
    initialize();

    const options = {
        chain: "polygon",
        address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
    };

    const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
}

async function getTokenBalance() {
    initialize();

    const options = {
        chain: "0x1",
        address: "0x1cC543590b7E797f36FcA5e007906cCE847D3AF5",
    };
    const balances = await Moralis.Web3API.account.getTokenBalances(options);
}

async function nativeBalance(){
    initialize();

    const options = {
        chain: "eth",
        address: "0x1cC543590b7E797f36FcA5e007906cCE847D3AF5",
    };

    const balance = await Moralis.Web3API.account.getNativeBalance(options);
}

async function tokenTransfers() {
    initialize();

    const options = {
        chain: "bsc",
        address: "0x3d6c0e79a1239df0039ec16Cc80f7A343b6C530e",
    };

    const transfers = await Moralis.Web3API.account.getTokenTransfers(options);
}

async function nftTransfers() {
    initialize();

    const options = {
        chain: "polygon",
        address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
        limit: "5",
    };

    const transfersNFT = await Moralis.Web3API.account.getNFTTransfers(options);
}

async function nftsForContract() {
    initialize();

    const options = {
        chain: "polygon",
        address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
        token_address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
    };
    const polygonNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
}