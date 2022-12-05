function connect() {
    if (typeof window.ethereum !== "undefined") {
        ethereum.request({ method: "eth_requestAccounts" })
            .then((accounts) => {
                const account = accounts[0];
                document.getElementById("walletID").innerHTML = `Wallet connected: ${account}`;
                document.getElementById("metamaskButton").remove();
            }).catch((error) => {
            console.log(error, error.code);
        });
    }
}