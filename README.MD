# Terminal Currency Converter

## Description
This is a currency API which works on terminal. However feel free to implement to your project as well. 

The key point in this api, gives you the countries that you can spend the converted money.

## Usage

This project has been designed to run on terminal and give you the rate, calculation and the countries that accepts the particular currency. 

### Options 
```
Options:
  --version     Show version number                                    [boolean]  -f, --from    from Currency                                [string] [required]
  -t, --to      to Currency                                  [string] [required]
  -a, --amount  Amount that you want to convert              [number] [required]
  --help, -h    Show help                                              [boolean
```

### Usage

`node app.js -f EUR -t USD -a 500`

### Sample Output

```
The conversion TRY to USD the exchange amount is 136.61USD. 1TRY to USD equals to 0.27TRY. You can spend USD to following contries; American Samoa, Bonaire, Sint Eustatius and Saba, British Indian Ocean Territory, United States Minor Outlying Islands, Virgin Islands (British), Virgin Islands (U.S.), Cambodia, Ecuador, El Salvad
or, Guam, Marshall Islands, Micronesia (Federated States of), Northern Mariana Islands, Palau, Panama, Puerto Rico, Timor-Leste, Turks and Caicos Islands, United States of America, Zimbabwe
```

## Dependencies

* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Yargs] (https://github.com/yargs/yargs) - Creating command line arguments.


