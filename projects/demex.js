const retry = require('async-retry')
const axios = require("axios")

async function fetch() {
    let tvl = 0
    
    const response = await retry(async bail => await axios.get('https://tradescan.switcheo.org/liquidityPoolYields'))
    const { data } = response

    for (var key of Object.keys(data)) {
        tvl += parseFloat(data[key].liquidityValueUSD)
    }
    return tvl
}
  
module.exports = {
    fetch
}