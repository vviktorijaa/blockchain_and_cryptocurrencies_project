function getCoinGeckoInfo() {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false", false);
    xmlHttp.send( null);
    let jsonObj = JSON.parse(xmlHttp.responseText);

    let tableBody = document.getElementById("tableBody");

    for (let i=0; i<jsonObj.length; i++){
        let tr = document.createElement("tr");

        let order = document.createElement("th");
        order.setAttribute("class", "mr-2");
        order.innerHTML = i + 1;

        let logo = document.createElement("td");
        let image = document.createElement("img");
        image.setAttribute("style", "height: 30px; width: 30px");
        image.setAttribute("src", jsonObj[i].image);
        logo.appendChild(image);

        let name = document.createElement("td");
        name.innerHTML = jsonObj[i].name + " " + jsonObj[i].symbol;

        let marketCap = document.createElement("td");
        marketCap.innerHTML = jsonObj[i].market_cap;

        let marketCapChangePercentage = document.createElement("td");
        marketCapChangePercentage.innerHTML = jsonObj[i].market_cap_change_percentage_24h.toFixed(2);

        let maxSupply = document.createElement("td");
        maxSupply.innerHTML = jsonObj[i].max_supply;

        let priceChangePercentage = document.createElement("td");
        priceChangePercentage.innerHTML = jsonObj[i].price_change_percentage_24h.toFixed(2);

        let totalSupply = document.createElement("td");
        totalSupply.innerHTML = jsonObj[i].total_supply;

        let totalVolume = document.createElement("td");
        totalVolume.innerHTML = jsonObj[i].total_volume;

        tr.appendChild(order);
        tr.appendChild(logo);
        tr.appendChild(name);
        tr.appendChild(marketCap);
        tr.appendChild(marketCapChangePercentage);
        tr.appendChild(maxSupply);
        tr.appendChild(priceChangePercentage);
        tr.appendChild(totalSupply);
        tr.appendChild(totalVolume);

        tableBody.appendChild(tr);
    }
}