/*
var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
};
*/

var Base = artifacts.require("./Base.sol");
var ERC20Token = artifacts.require("./ERC20Token.sol");
var ERC20Interface = artifacts.require("./ERC20Interface.sol");
var ITTInterface = artifacts.require("./ITT.sol");
var LibCLLu = artifacts.require("./LibCLLu.sol");
var Math = artifacts.require("./Math.sol");

module.exports = function(deployer) {
  deployer.deploy(Base);
  deployer.deploy(Math);
  deployer.deploy(LibCLLu);
  deployer.deploy(ERC20Interface);
  deployer.deploy(ERC20Token);
  deployer.link(LibCLLu,ITTInterface);
  deployer.deploy(ITTInterface);
};
