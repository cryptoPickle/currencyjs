const axios = require('axios');

const getExchangeRate = async (from, to) => {
  try{
    const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
    const result = response.data.rates[to];
    if (result) return result;
    throw new Error();
  }
  catch (e) {
    throw new Error(`Unable to get exchange rate ${from} to ${to}`)
  }

}

module.exports = {getExchangeRate};