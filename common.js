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

function generateRowsWithInfo(object, dynamicContent) {

    for (const property in object) {
        let tableRow = document.createElement("tr");
        let tableRow2 = document.createElement("tr");
        let tableRow3 = document.createElement("tr");
        let th = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");

        if(property === "metadata") {
            let jsonObj = JSON.parse(`${object[property]}`);
            th.innerHTML = "Name:";
            tableRow.appendChild(th);

            td.innerHTML = jsonObj.name;
            tableRow.appendChild(td);

            th2.innerHTML = "Description:";
            tableRow2.appendChild(th2);

            td2.innerHTML = jsonObj.description;
            tableRow2.appendChild(td2);

            th3.innerHTML = "Image:";
            tableRow3.appendChild(th3);

            let image = document.createElement("img");
            image.setAttribute("src", jsonObj.image);
            image.setAttribute("style", "height:150px; width:150px");
            td3.appendChild(image);
            tableRow3.appendChild(td3);

            dynamicContent.appendChild(tableRow);
            dynamicContent.appendChild(tableRow2);
            dynamicContent.appendChild(tableRow3);
        } else if (property === "token_uri") {
            th.innerHTML = `${property}`;
            tableRow.appendChild(th);

            let a = document.createElement("a");
            a.innerHTML = "Token URI";
            a.href = `${object[property]}`;
            tableRow.appendChild(a);

            dynamicContent.appendChild(tableRow);
        } else {
            th.innerHTML = `${property}`;
            tableRow.appendChild(th);

            td.innerHTML = `${object[property]}`;
            tableRow.appendChild(td);

            dynamicContent.appendChild(tableRow);
        }

        console.log(`${property}: ${object[property]}`);
    }
}