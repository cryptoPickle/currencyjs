const axios = require('axios');

const getCountries = async (currencyCode) => {
  try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode.toLowerCase()}`);
    return response.data.map((value) => value.name)  
  }
  catch (e) {
    throw new Error(`Unable to get contries that use ${currencyCode}`)
  }

};

module.exports = {getCountries}