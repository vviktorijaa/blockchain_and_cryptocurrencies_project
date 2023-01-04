async function getTransactions() {
    initializeTable();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        fetch('https://deep-index.moralis.io/api/v2/' + address + '/erc20/transfers', {
            method: 'GET',
            headers: {
                'x-api-key': '{your-api-key}',
            },
        })
            .then(response => response.json())
            .then(response => {
                document.getElementById('displayContainer').style.visibility = 'visible';
                let dynamicContent = document.getElementById("tableBody");
                generateFirstTwoRowsTable(dynamicContent, address, chain);
                document.getElementById('label').innerHTML = "Transactions";
                let object = response.result[0];
                generateRowsWithInfo(object, dynamicContent);
                document.getElementById("gettingDataContainer").style.visibility = 'hidden';
            })
            .catch(err => console.error(err));
    }, 1000);
}

async function getNativeBalance() {
    initializeTable();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        fetch('https://deep-index.moralis.io/api/v2/' + address + '/balance', {
            method: 'GET',
            headers: {
                'x-api-key': '{your-api-key}',
            },
        })
            .then(response => response.json())
            .then(response => {
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
                td1.innerHTML = response.balance;
                tableRow.appendChild(td1);

                document.getElementById("gettingDataContainer").style.visibility = 'hidden';
            })
            .catch(err => console.error(err));
    }, 1000);
}

async function getTokenBalance() {
    initializeTable();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        fetch('https://deep-index.moralis.io/api/v2/' + address + '/erc20', {
            method: 'GET',
            headers: {
                'x-api-key': '{your-api-key}',
            },
        })
            .then(response => response.json())
            .then(response => {
                document.getElementById('displayContainer').style.visibility = 'visible';
                if (response.length !== 0) {
                    let dynamicContent = document.getElementById("tableBody");
                    generateFirstTwoRowsTable(dynamicContent, address, chain)
                    document.getElementById('label').innerHTML = "Token balances";
                    let object = response[0];
                    generateRowsWithInfo(object, dynamicContent);
                    document.getElementById("gettingDataContainer").style.visibility = 'hidden';
                } else {
                    document.getElementById('gettingData').innerHTML = 'There are no results for this address.';
                }
            })
            .catch(err => console.error(err));
    }, 1000);
}

async function getNfts() {
    initializeTable();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    if (emptyAddressOrChain(address, chain)) {
        return;
    }

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        fetch('https://deep-index.moralis.io/api/v2/' + address + '/nft', {
            method: 'GET',
            headers: {
                'x-api-key': '{your-api-key}',
            },
        })
            .then(response => response.json())
            .then(response => {
                document.getElementById('displayContainer').style.visibility = 'visible';

                let dynamicContent = document.getElementById("tableBody");
                generateFirstTwoRowsTable(dynamicContent, address, chain)
                document.getElementById('label').innerHTML = "NFTs";
                let object = response.result[0];
                generateRowsWithInfo(object, dynamicContent);
                document.getElementById("gettingDataContainer").style.visibility = 'hidden';
            })
            .catch(err => console.error(err));
    }, 1000);
}

async function getNftTransfers() {
    initializeTable();

    let address = document.getElementById('address').value;
    let chain = document.getElementById('chain').value;

    document.getElementById('gettingDataContainer').style.visibility = 'visible';
    document.getElementById('gettingData').innerHTML = 'Getting the data...';

    setTimeout(async function () {
        fetch('https://deep-index.moralis.io/api/v2/' + address + '/nft/transfers', {
            method: 'GET',
            headers: {
                'x-api-key': '{your-api-key}',
            },
        })
            .then(response => response.json())
            .then(response => {
                document.getElementById('displayContainer').style.visibility = 'visible';
                let dynamicContent = document.getElementById("tableBody");
                generateFirstTwoRowsTable(dynamicContent, address, chain)
                document.getElementById('label').innerHTML = "NFT Transfers";
                let object = response.result[0];
                generateRowsWithInfo(object, dynamicContent);
                document.getElementById("gettingDataContainer").style.visibility = 'hidden';
            })
            .catch(err => console.error(err));
    }, 1000);
}