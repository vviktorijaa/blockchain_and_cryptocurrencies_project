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

        let tableRow = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Total transactions:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = getTransactions.total;
        tableRow.appendChild(td1);

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
        console.log(balances)

        document.getElementById('displayContainer').style.visibility = 'visible';

        let dynamicContent = document.getElementById("tableBody");

        generateFirstTwoRowsTable(dynamicContent, address, chain)

        document.getElementById('label').innerHTML = "Token balances";

        let tableRow = document.createElement("tr");
        let tableRow2 = document.createElement("tr");
        let tableRow3 = document.createElement("tr");
        let tableRow4 = document.createElement("tr");
        let tableRow5 = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Token address:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = balances[0].token_address;
        tableRow.appendChild(td1);

        dynamicContent.appendChild(tableRow2);

        let th2 = document.createElement("th");
        th2.innerHTML = "Name:";
        tableRow2.appendChild(th2);

        let td2 = document.createElement("td");
        td2.innerHTML = balances[0].name;
        tableRow2.appendChild(td2);

        dynamicContent.appendChild(tableRow3);

        let th3 = document.createElement("th");
        th3.innerHTML = "Symbol:";
        tableRow3.appendChild(th3);

        let td3 = document.createElement("td");
        td3.innerHTML = balances[0].symbol;
        tableRow3.appendChild(td3);

        dynamicContent.appendChild(tableRow4);

        let th4 = document.createElement("th");
        th4.innerHTML = "Balance:";
        tableRow4.appendChild(th4);

        let td4 = document.createElement("td");
        td4.innerHTML = balances[0].balance;
        tableRow4.appendChild(td4);

        dynamicContent.appendChild(tableRow5);

        let th5 = document.createElement("th");
        th5.innerHTML = "Decimals:";
        tableRow5.appendChild(th5);

        let td5 = document.createElement("td");
        td5.innerHTML = balances[0].decimals;
        tableRow5.appendChild(td5);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
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

        let dynamicContent = document.getElementById("tableBody");

        generateFirstTwoRowsTable(dynamicContent, address, chain)

        document.getElementById('label').innerHTML = "Token transfers";

        let tableRow = document.createElement("tr");
        let tableRow2 = document.createElement("tr");
        let tableRow3 = document.createElement("tr");
        let tableRow4 = document.createElement("tr");
        let tableRow5 = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Block hash:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = tokenTransfers.result[0].block_hash;
        tableRow.appendChild(td1);

        dynamicContent.appendChild(tableRow2);

        let th2 = document.createElement("th");
        th2.innerHTML = "Block number:";
        tableRow2.appendChild(th2);

        let td2 = document.createElement("td");
        td2.innerHTML = tokenTransfers.result[0].block_number;
        tableRow2.appendChild(td2);

        dynamicContent.appendChild(tableRow3);

        let th3 = document.createElement("th");
        th3.innerHTML = "Block timestamp:";
        tableRow3.appendChild(th3);

        let td3 = document.createElement("td");
        td3.innerHTML = tokenTransfers.result[0].block_timestamp;
        tableRow3.appendChild(td3);

        dynamicContent.appendChild(tableRow4);

        let th4 = document.createElement("th");
        th4.innerHTML = "To address:";
        tableRow4.appendChild(th4);

        let td4 = document.createElement("td");
        td4.innerHTML = tokenTransfers.result[0].to_address;
        tableRow4.appendChild(td4);

        dynamicContent.appendChild(tableRow5);

        let th5 = document.createElement("th");
        th5.innerHTML = "Transaction hash:";
        tableRow5.appendChild(th5);

        let td5 = document.createElement("td");
        td5.innerHTML = tokenTransfers.result[0].transaction_hash;
        tableRow5.appendChild(td5);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
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

    const nfts = await Moralis.Web3API.account.getNFTs(options);
    console.log(nfts)
}

async function getNftTransfers() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    const options = initializeOptions(chain, address);
    const nftTransfers = await Moralis.Web3API.account.getNFTTransfers(options);
    console.log(nftTransfers);
}

async function getNftsForContract() {
    initializeMoralis();
    cleanTable();
    generateTableSkeleton();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    const options = initializeOptions(chain, address);

    const nftsForContract = await Moralis.Web3API.account.getNFTsForContract(options);
    console.log(nftsForContract);
}

function generateTableSkeleton() {
    let table = document.createElement("table");
    table.setAttribute("class", "table table-borderless table-striped mb-5");
    table.setAttribute("style", "width: 40%; margin: auto");

    let tableHeader = document.createElement("thead");
    let trHead = document.createElement("tr");
    let tdHead = document.createElement("th");
    let tableBody = document.createElement("tbody");

    tdHead.setAttribute("class", "text-center");
    tdHead.setAttribute("scope", "row");
    tdHead.setAttribute("colspan", "2");
    tdHead.setAttribute("id", "label");

    tableBody.setAttribute("id", "tableBody");

    trHead.appendChild(tdHead);
    tableHeader.appendChild(trHead);

    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    document.getElementById("tableContent").appendChild(table);
}

function generateFirstTwoRowsTable(dynamicContent, address, chain) {
    let addressRow = document.createElement("tr");
    let chainRow = document.createElement("tr");

    let addressLabel = document.createElement("th");
    addressLabel.innerHTML = "Address:";
    addressRow.appendChild(addressLabel);

    let addressValue = document.createElement("td");
    addressValue.setAttribute("id", "addressValue");
    addressValue.innerHTML = address;
    addressRow.appendChild(addressValue);

    dynamicContent.appendChild(addressRow);

    let chainLabel = document.createElement("th");
    chainLabel.innerHTML = "Chain:";
    chainRow.appendChild(chainLabel);

    let chainValue = document.createElement("td");
    chainValue.setAttribute("id", "chainValue");
    chainValue.innerHTML = chain;
    chainRow.appendChild(chainValue);

    dynamicContent.appendChild(chainRow);
}

function cleanTable() {
    let tableContent = document.getElementById("tableContent");
    while (tableContent.firstChild) {
        tableContent.removeChild(tableContent.lastChild);
    }
}

function emptyAddressOrChain(address, chain) {
    if (address === "" || chain === "") {
        document.getElementById('gettingDataContainer').style.visibility = 'visible';
        document.getElementById('gettingData').innerHTML = 'Cannot get data. Please enter valid chain and address';
        return true;
    }
}