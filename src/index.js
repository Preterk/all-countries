var objectValues = require('./utils/object-values');
var countries = require('./data/countries.json');
var capitals = require('./data/capital.json');
var currencies = require('./data/currency.json');
var phones = require('./data/phone.json');

module.exports = {
    all: objectValues(countries),
    getCountryByCode: function (code) {
        if (code && typeof code === 'string') {
            return countries[code.toUpperCase()];
        }
    },
    getCountryCodes: Object.keys(countries),
    getCountryCodeByCountryName: function (country) {
        for (i in countries) {
            if (country === countries[i]) {
                return i;
                break;
            }
        }
    },
    getCountryByCapital: function (capital) {
        for (i in capitals) {
            if (capital === capitals[i]) {
                return this.getCountryByCode(i);
                break;
            }
        }
    },
    getCountryByCuurency: function (cuurency) {
        for (i in currencies) {
            if (cuurency === currencies[i]) {
                return this.getCountryByCode(i);
                break;
            }
        }
    },
    getCountryByPhoneCode: function (phoneCode) {
        for (i in phones) {
            if (phoneCode === phones[i]) {
                return this.getCountryByCode(i);
                break;
            }
        }
    },
    getCapitals: objectValues(capitals),
    // TODO Add the ability to accept country name too
    getCapitalByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return capitals[code.toUpperCase()];
        }
    },
    getCurrencies: objectValues(currencies),
    // TODO Add the ability to accept country name too
    getCurrencyByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return currencies[code.toUpperCase()];
        }
    },
    getPhoneCodes: objectValues(phones),
    // TODO Add the ability to accept country name too
    getPhoneCodeByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return phones[code.toUpperCase()];
        }
    }
};
