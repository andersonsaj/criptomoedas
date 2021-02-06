var apikey = {
    key: '1c0dc485-bc9c-4029-97d3-d02628ebeec7'
}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + 
apikey.key)
.then(response => {
    if(!response.ok) {
        throw new Error('Erro ao executar a requisição, status' 
        + response.status);
    }
    return response.json();
})
.then(api => {
    console.log(api);
    var text = "";

    for(var i = 0; i < 10; i++){
        let first_historical_data = new Date(api.data[i].first_historical_data);
        text = text + `
         <div class="main-container">
            <img src="coin.png" class="main-img">
            <div class="main-content">
                <h5 class="main-subtitle">${api.data[i].name} </h5>
                <p class="main-symbol">
                <strong>Symbol:</strong> ${api.data[i].symbol} 
                <br>
                
                <strong>First historical data:</strong> ${first_historical_data.toLocaleString()}
                </p>
            </div>
          </div>
        `;

        document.getElementById("coins").innerHTML = text;
    }
})
.catch(error => {
    console.error(error.message);
});