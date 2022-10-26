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

        if(balances.length != 0) {
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
            td1.innerHTML = balances[0].token_address; //what if there are no balances, the array is empty
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

        if(tokenTransfers.total != 0) {
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

        let tableRow = document.createElement("tr");
        let tableRow2 = document.createElement("tr");
        let tableRow3 = document.createElement("tr");
        let tableRow4 = document.createElement("tr");
        let tableRow5 = document.createElement("tr");
        let tableRow6 = document.createElement("tr");
        let tableRow7 = document.createElement("tr");
        let tableRow8 = document.createElement("tr");
        let tableRow9 = document.createElement("tr");
        let tableRow10 = document.createElement("tr");
        let tableRow11 = document.createElement("tr");
        let tableRow12 = document.createElement("tr");
        let tableRow13 = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Token address:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = nfts.result[0].token_address;
        tableRow.appendChild(td1);

        dynamicContent.appendChild(tableRow2);

        let th2 = document.createElement("th");
        th2.innerHTML = "Token id:";
        tableRow2.appendChild(th2);

        let td2 = document.createElement("td");
        td2.innerHTML = nfts.result[0].token_id;
        tableRow2.appendChild(td2);

        dynamicContent.appendChild(tableRow3);

        let th3 = document.createElement("th");
        th3.innerHTML = "Token hash:";
        tableRow3.appendChild(th3);

        let td3 = document.createElement("td");
        td3.innerHTML = nfts.result[0].token_hash;
        tableRow3.appendChild(td3);

        dynamicContent.appendChild(tableRow4);

        let th4 = document.createElement("th");
        th4.innerHTML = "Token uri:";
        tableRow4.appendChild(th4);

        let td4 = document.createElement("td");
        td4.innerHTML = nfts.result[0].token_uri;
        tableRow4.appendChild(td4);

        dynamicContent.appendChild(tableRow5);

        let th5 = document.createElement("th");
        th5.innerHTML = "Symbol:";
        tableRow5.appendChild(th5);

        let td5 = document.createElement("td");
        td5.innerHTML = nfts.result[0].symbol;
        tableRow5.appendChild(td5);

        dynamicContent.appendChild(tableRow6);

        let th6 = document.createElement("th");
        th6.innerHTML = "Name:";
        tableRow6.appendChild(th6);

        let td6 = document.createElement("td");
        td6.innerHTML = nfts.result[0].name;
        tableRow6.appendChild(td6);

        dynamicContent.appendChild(tableRow7);

        let th7 = document.createElement("th");
        th7.innerHTML = "Metadata:";
        tableRow7.appendChild(th7);

        let td7 = document.createElement("td");
        td7.innerHTML = nfts.result[0].metadata;
        tableRow7.appendChild(td7);

        dynamicContent.appendChild(tableRow8);

        let th8 = document.createElement("th");
        th8.innerHTML = "Minter address:";
        tableRow8.appendChild(th8);

        let td8 = document.createElement("td");
        td8.innerHTML = nfts.result[0].minter_address;
        tableRow8.appendChild(td8);

        dynamicContent.appendChild(tableRow9);

        let th9 = document.createElement("th");
        th9.innerHTML = "Owner of:";
        tableRow9.appendChild(th9);

        let td9 = document.createElement("td");
        td9.innerHTML = nfts.result[0].owner_of;
        tableRow9.appendChild(td9);

        dynamicContent.appendChild(tableRow10);

        let th10 = document.createElement("th");
        th10.innerHTML = "Block number:";
        tableRow10.appendChild(th10);

        let td10 = document.createElement("td");
        td10.innerHTML = nfts.result[0].block_number;
        tableRow10.appendChild(td10);

        dynamicContent.appendChild(tableRow11);

        let th11 = document.createElement("th");
        th11.innerHTML = "Block number minted:";
        tableRow11.appendChild(th11);

        let td11 = document.createElement("td");
        td11.innerHTML = nfts.result[0].block_number_minted;
        tableRow11.appendChild(td11);

        dynamicContent.appendChild(tableRow12);

        let th12 = document.createElement("th");
        th12.innerHTML = "Contract type:";
        tableRow12.appendChild(th12);

        let td12 = document.createElement("td");
        td12.innerHTML = nfts.result[0].contract_type;
        tableRow12.appendChild(td12);

        dynamicContent.appendChild(tableRow13);

        let th13 = document.createElement("th");
        th13.innerHTML = "Amount:";
        tableRow13.appendChild(th13);

        let td13 = document.createElement("td");
        td13.innerHTML = nfts.result[0].amount;
        tableRow13.appendChild(td13);

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

        document.getElementById('label').innerHTML = "NFTs";

        let tableRow = document.createElement("tr");
        let tableRow2 = document.createElement("tr");
        let tableRow3 = document.createElement("tr");
        let tableRow4 = document.createElement("tr");
        let tableRow5 = document.createElement("tr");
        let tableRow6 = document.createElement("tr");
        let tableRow7 = document.createElement("tr");
        let tableRow8 = document.createElement("tr");
        let tableRow9 = document.createElement("tr");
        let tableRow10 = document.createElement("tr");
        let tableRow11 = document.createElement("tr");
        let tableRow12 = document.createElement("tr");
        let tableRow13 = document.createElement("tr");
        dynamicContent.appendChild(tableRow);

        let th1 = document.createElement("th");
        th1.innerHTML = "Token address:";
        tableRow.appendChild(th1);

        let td1 = document.createElement("td");
        td1.innerHTML = nftTransfers.result[0].token_address;
        tableRow.appendChild(td1);

        dynamicContent.appendChild(tableRow2);

        let th2 = document.createElement("th");
        th2.innerHTML = "Token id:";
        tableRow2.appendChild(th2);

        let td2 = document.createElement("td");
        td2.innerHTML = nftTransfers.result[0].token_id;
        tableRow2.appendChild(td2);

        dynamicContent.appendChild(tableRow3);

        let th3 = document.createElement("th");
        th3.innerHTML = "Transaction hash:";
        tableRow3.appendChild(th3);

        let td3 = document.createElement("td");
        td3.innerHTML = nftTransfers.result[0].transaction_hash;
        tableRow3.appendChild(td3);

        dynamicContent.appendChild(tableRow4);

        let th4 = document.createElement("th");
        th4.innerHTML = "Transaction index:";
        tableRow4.appendChild(th4);

        let td4 = document.createElement("td");
        td4.innerHTML = nftTransfers.result[0].transaction_index;
        tableRow4.appendChild(td4);

        dynamicContent.appendChild(tableRow5);

        let th5 = document.createElement("th");
        th5.innerHTML = "Transaction type:";
        tableRow5.appendChild(th5);

        let td5 = document.createElement("td");
        td5.innerHTML = nftTransfers.result[0].transaction_type;
        tableRow5.appendChild(td5);

        dynamicContent.appendChild(tableRow6);

        let th6 = document.createElement("th");
        th6.innerHTML = "From address:";
        tableRow6.appendChild(th6);

        let td6 = document.createElement("td");
        td6.innerHTML = nftTransfers.result[0].from_address;
        tableRow6.appendChild(td6);

        dynamicContent.appendChild(tableRow7);

        let th7 = document.createElement("th");
        th7.innerHTML = "To address:";
        tableRow7.appendChild(th7);

        let td7 = document.createElement("td");
        td7.innerHTML = nftTransfers.result[0].to_address;
        tableRow7.appendChild(td7);

        dynamicContent.appendChild(tableRow8);

        let th8 = document.createElement("th");
        th8.innerHTML = "Contract type:";
        tableRow8.appendChild(th8);

        let td8 = document.createElement("td");
        td8.innerHTML = nftTransfers.result[0].contract_type;
        tableRow8.appendChild(td8);

        dynamicContent.appendChild(tableRow9);

        let th9 = document.createElement("th");
        th9.innerHTML = "Block number:";
        tableRow9.appendChild(th9);

        let td9 = document.createElement("td");
        td9.innerHTML = nftTransfers.result[0].block_number;
        tableRow9.appendChild(td9);

        dynamicContent.appendChild(tableRow10);

        let th10 = document.createElement("th");
        th10.innerHTML = "Block hash:";
        tableRow10.appendChild(th10);

        let td10 = document.createElement("td");
        td10.innerHTML = nftTransfers.result[0].block_hash;
        tableRow10.appendChild(td10);

        dynamicContent.appendChild(tableRow11);

        let th11 = document.createElement("th");
        th11.innerHTML = "Block timestamp:";
        tableRow11.appendChild(th11);

        let td11 = document.createElement("td");
        td11.innerHTML = nftTransfers.result[0].block_timestamp;
        tableRow11.appendChild(td11);

        dynamicContent.appendChild(tableRow12);

        let th12 = document.createElement("th");
        th12.innerHTML = "Log index:";
        tableRow12.appendChild(th12);

        let td12 = document.createElement("td");
        td12.innerHTML = nftTransfers.result[0].log_index;
        tableRow12.appendChild(td12);

        dynamicContent.appendChild(tableRow13);

        let th13 = document.createElement("th");
        th13.innerHTML = "Verified:";
        tableRow13.appendChild(th13);

        let td13 = document.createElement("td");
        td13.innerHTML = nftTransfers.result[0].verified;
        tableRow13.appendChild(td13);

        document.getElementById("gettingDataContainer").style.visibility = 'hidden';
    }, 1000);
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