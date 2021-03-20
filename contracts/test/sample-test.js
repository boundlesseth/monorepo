const { expect } = require("chai");

describe("Boundless", function() {
    let artistRegistry;
    let blockRegistry;
    let erc20;
    let seller;
    let boundless;
    let zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
    let someBlock = "0xe05b420bb82a0bdf3b94227f0aa14106a0395e70be32bdb38218cf526ae6e88d";

    it("Deploy all the contracts", async function() {
        const ArtistRegistry = await ethers.getContractFactory('OwnedRegistry', ethers.Signer);
        artistRegistry = await ArtistRegistry.deploy();

        const BlockRegistry = await ethers.getContractFactory('OpenRegistry', ethers.Signer);
        blockRegistry = await BlockRegistry.deploy();

        const ERC20 = await ethers.getContractFactory('AnyOldERC20Token', ethers.Signer);
        erc20 = await ERC20.deploy(10000);

        const Seller = await ethers.getContractFactory('Seller', ethers.Signer);
        seller = await Seller.deploy("0x0000000000000000000000000000000000000001", erc20.address, 1000, 120);

        const Boundless = await ethers.getContractFactory('Boundless', ethers.Signer);
        boundless = await Boundless.deploy(artistRegistry.address, blockRegistry.address, seller.address);
    });

    it("Add artists to the registry", async function() {
        expect(await artistRegistry.isValid(zeros)).to.equal(false);
        await artistRegistry.addItem(zeros);
        expect(await artistRegistry.isValid(zeros)).to.equal(true);
    })

    it("Check that blocks are valid", async function() {
        expect(await blockRegistry.isValid(someBlock)).to.equal(true);
    })

    it("Mint and sell a token", async function() {
        await boundless.mint(someBlock,zeros);
        let id = await boundless.getId(someBlock,zeros);
        expect(await boundless.balanceOf(seller.address, id)).to.equal(ethers.BigNumber.from("0x01"));

        await seller.sellToken(boundless.address, id);
        let currentPrice = await seller.getCurrentPrice(boundless.address, id);
        expect(currentPrice).to.not.equal(ethers.BigNumber.from("0x00"));

        await erc20.approve(seller.address,100000000);
        await seller.buyToken(boundless.address, id);
        expect(await boundless.balanceOf(seller.address, id)).to.equal(ethers.BigNumber.from("0x00"));
    });
});
