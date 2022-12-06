Moralis.initialize("g2pduJTFfs0pQVywf2mDPebTRK8L35CGaBBvHiWk");
Moralis.serverURL = "https://t1qcvos9rbvt.grandmoralis.com:2053/server";

function initializeMoralis() {
    Moralis.start({
        serverUrl: "https://t1qcvos9rbvt.grandmoralis.com:2053/server",
        appId: "g2pduJTFfs0pQVywf2mDPebTRK8L35CGaBBvHiWk"
    })
}

function initializeOptions(chain, address) {
    return {
        chain: chain,
        address: address
    };
}

async function index(){
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    const options = initializeOptions(chain, address);

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const getTransactions = await Moralis.Web3.getTransactions(options);
        document.getElementById('displayContainer').style.visibility = 'visible';
        let dynamicContent = document.getElementById("tableBody");
        generateFirstTwoRowsTable(dynamicContent, address, chain);
        document.getElementById('label').innerHTML = "Transactions";
        let object = getTransactions.result[0];
        generateRowsWithInfo(object, dynamicContent);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
}

async function getNativeBalance(){
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    const options = initializeOptions(chain, address);

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const balance = await Moralis.Web3API.account.getNativeBalance(options);

        document.getElementById('displayContainer').style.visibility = 'visible';

        let dynamicContent = document.getElementById("tableBody");

        generateFirstTwoRowsTable(dynamicContent, address, chain);

        document.getElementById('label').innerHTML = "Native balance";

        let tableRow = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Native balance:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = balance.balance;
        tableRow.appendChild(td1);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
}

async function getTokenBalance() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    const options = initializeOptions(chain, address);

    setTimeout(async function () {
        const balances = await Moralis.Web3API.account.getTokenBalances(options);

        document.getElementById('displayContainer').style.visibility = 'visible';

        if(balances.length !== 0) {
            let dynamicContent = document.getElementById("tableBody");
            generateFirstTwoRowsTable(dynamicContent, address, chain)
            document.getElementById('label').innerHTML = "Token balances";

            let object = balances[0];
            generateRowsWithInfo(object, dynamicContent);

            document.getElementById("gettingDataContainer").style.visibility = 'hidden';
        } else {
            document.getElementById('gettingData').innerHTML = 'There are no results for this address.';
        }
    }, 1000);
}

async function getTokenTransfers() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    const options = initializeOptions(chain, address);

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const tokenTransfers = await Moralis.Web3API.account.getTokenTransfers(options);
        document.getElementById('displayContainer').style.visibility = 'visible';

        if(tokenTransfers.total !== 0) {
            let dynamicContent = document.getElementById("tableBody");
            generateFirstTwoRowsTable(dynamicContent, address, chain)
            document.getElementById('label').innerHTML = "Token transfers";

            let object = tokenTransfers.result[0];
            generateRowsWithInfo(object, dynamicContent);

            document.getElementById("gettingDataContainer").style.visibility = 'hidden';
        } else {
            document.getElementById('gettingData').innerHTML = 'There are no results for this address.';
        }
    }, 1000);
}

async function getNfts() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    const options = initializeOptions(chain, address);

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const nfts = await Moralis.Web3API.account.getNFTs(options);
        document.getElementById('displayContainer').style.visibility = 'visible';

        let dynamicContent = document.getElementById("tableBody");

        generateFirstTwoRowsTable(dynamicContent, address, chain)

        document.getElementById('label').innerHTML = "NFTs";

        let object = nfts.result[0];
        generateRowsWithInfo(object, dynamicContent);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
}

async function getNftTransfers() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    const options = initializeOptions(chain, address);

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        const nftTransfers = await Moralis.Web3API.account.getNFTTransfers(options);
        document.getElementById('displayContainer').style.visibility = 'visible';

        let dynamicContent = document.getElementById("tableBody");

        generateFirstTwoRowsTable(dynamicContent, address, chain)

        document.getElementById('label').innerHTML = "NFT Transfers";

        let object = nftTransfers.result[0];
        generateRowsWithInfo(object, dynamicContent);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
}