const yargs = require('yargs');
const {getCountries,getExchangeRate} = require('./API')
const argv = yargs
.options({
  f:{
    demand:true,
    alias: 'from',
    describe: 'from Currency',
    string: true
  },
  t:{
    demand: true,
    alias: 'to',
    describe: 'to Currency',
    string: true
  },
  a:{
    demand: true,
    alias: 'amount',
    describe: 'Amount that you want to convert',
    number: true

  }
})
.help()
.alias('help','h')
.argv;


const convertCurrency = async (from, to, amount) => {
  const countries = await getCountries(to);
  const currency = await getExchangeRate(from, to);
  const exchangeAmount = amount * currency;
  return `The conversion ${from} to ${to} the exchange amount is ${exchangeAmount.toFixed(2)}${to}. 1${from} to ${to} equals to ${currency.toFixed(2)}${from}. You can spend ${to} to following contries; \n ${countries.join(', ')}`;
  
} 

convertCurrency( argv.f, argv.t, argv.a).then((value) => console.log(value)).catch((e) => console.log(e))

//getExchangeRate('USD', 'TRY' ).then((rate) => console.log(rate));

//getCountries('TRY').then((contries) => console.log(JSON.stringify(contries, undefined, 2)));