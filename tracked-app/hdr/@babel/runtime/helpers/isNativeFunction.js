function _isNativeFunction(n) {
    return -1 !== Function.toString.call(n).indexOf("[native code]");
}

module.exports = _isNativeFunction;