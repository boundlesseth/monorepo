import { ethers } from 'hardhat';

async function main() {
  console.log('\nStarting test deployment\n');

  const accounts = await ethers.provider.listAccounts();
  // TODO: Set this to something real
  const artist = "0x1111111111111111111111111111111111111111111111111111111111111111";

  console.log("Deployer account:", accounts[0]);
  console.log("Receiver account:", accounts[1]);

  // Deploy artist registry and add artist
  const OwnedRegistry = await ethers.getContractFactory('OwnedRegistry');
  const artistRegistry = await OwnedRegistry.deploy();

  await artistRegistry.deployed();
  await artistRegistry.addItem(artist)

  console.log('Artist registry deployed to:', artistRegistry.address);

  // Deploy block registry
  const OpenRegistry = await ethers.getContractFactory('OpenRegistry');
  const blockRegistry = await OpenRegistry.deploy();

  await blockRegistry.deployed();

  console.log('Block registry deployed to:', blockRegistry.address);

  // Deploy test native token
  const AnyOldERC20Token = await ethers.getContractFactory('AnyOldERC20Token');
  const testNativeToken = await AnyOldERC20Token.deploy(100);

  await testNativeToken.deployed();

  console.log('Test native token deployed to: ' + testNativeToken.address + ' with 100 initial supply.');

  // Deploy test seller
  const _receiver = accounts[1];
  const _nativeToken = testNativeToken.address;
  const _startPrice = 1000;
  const _duration = 120;

  const Seller = await ethers.getContractFactory('Seller');
  const testSeller = await Seller.deploy(_receiver, _nativeToken, _startPrice, _duration);

  await testSeller.deployed();

  console.log('Test seller deployed to:', testSeller.address);

  // Deploy boundless
  const _artistRegistry = artistRegistry.address;
  let _blockRegistry = blockRegistry.address;
  let _seller = testSeller.address;

  const Boundless = await ethers.getContractFactory('Boundless');
  const boundless = await Boundless.deploy(_artistRegistry, _blockRegistry, _seller);

  await boundless.deployed();

  console.log('Boundless deployed to:', boundless.address);

  console.log('\nTest deployment complete\n');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
