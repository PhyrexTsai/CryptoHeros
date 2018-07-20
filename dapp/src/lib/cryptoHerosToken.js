var Promise = require('bluebird');

const cryptoHerosTokenInterface = [
];

function CryptoHerosToken(web3, address) {
  this.web3 = web3;
  const cryptoHerosTokenContract = web3.eth.contract(cryptoHerosTokenInterface);
  this.cryptoHerosTokenPromise = Promise.resolve(Promise.promisifyAll(cryptoHerosTokenContract.at(address)));
}

CryptoHerosToken.prototype.name = function (callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.nameAsync();
  });
}

CryptoHerosToken.prototype.symbol = function (callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.symbolAsync();
  });
}

CryptoHerosToken.prototype.ownerOf = function (tokenId, callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.ownerOfAsync(tokenId);
  });
}

CryptoHerosToken.prototype.tokenURI = function (tokenId, callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.tokenURIAsync(tokenId);
  });
}

CryptoHerosToken.prototype.transferOwnership = function (address, callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.transferOwnershipAsync(address);
  });
}

CryptoHerosToken.prototype.getOwnedTokens = function (address, callback) {
  return this.cryptoHerosTokenPromise.then(function (cryptoHerosToken) {
    return cryptoHerosToken.getOwnedTokensAsync(address);
  });
}

module.exports = CryptoHerosToken;
