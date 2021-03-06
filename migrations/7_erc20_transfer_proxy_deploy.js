var ERC20TransferProxy = artifacts.require("ERC20TransferProxy");

module.exports = function(deployer, network) {
  if (network === "test") return;
  deployer.then(function() {
    return;
    return deployer.deploy(ERC20TransferProxy).then(function(token) {
      console.log(`ERC20TransferProxy is deployed at ${token.address}`);
    });
  });
};
