var arrayWithHoles = require("./arrayWithHoles"), iterableToArray = require("./iterableToArray"), unsupportedIterableToArray = require("./unsupportedIterableToArray"), nonIterableRest = require("./nonIterableRest");

function _toArray(r) {
    return arrayWithHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableRest();
}

module.exports = _toArray;