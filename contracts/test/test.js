const { expect, assert } = require("chai");

describe("Boundless should:", function() {
    let accounts, artistRegistry, blockRegistry, boundless, deployer, erc20, id, receiver, seller;
    const zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
    const ones  = "0x1111111111111111111111111111111111111111111111111111111111111111"
    const someBlock = "0xe05b420bb82a0bdf3b94227f0aa14106a0395e70be32bdb38218cf526ae6e88d";

    before(async function() {
        accounts = await ethers.getSigners();
        deployer = accounts[0];
        receiver = accounts[1];
        buyer = accounts[0];
        recipient = accounts[3];
    });

    it("deploy all the contracts", async function() {
        const ArtistRegistry = await ethers.getContractFactory('OwnedRegistry', deployer);
        artistRegistry = await ArtistRegistry.deploy();

        const BlockRegistry = await ethers.getContractFactory('OpenRegistry', deployer);
        blockRegistry = await BlockRegistry.deploy();

        const ERC20 = await ethers.getContractFactory('AnyOldERC20Token', deployer);
        erc20 = await ERC20.deploy(100000000);

        const Seller = await ethers.getContractFactory('Seller', deployer);
        seller = await Seller.deploy(receiver.address, erc20.address, 1000, 120);

        const Boundless = await ethers.getContractFactory('Boundless', deployer);
        boundless = await Boundless.deploy(artistRegistry.address, blockRegistry.address, seller.address);
    });

    it("add artists to the registry", async function() {
        expect(await artistRegistry.isValid(zeros)).to.equal(false);
        await artistRegistry.addItem(zeros);
        expect(await artistRegistry.isValid(zeros)).to.equal(true);
    })

    it("check that blocks are valid", async function() {
        expect(await blockRegistry.isValid(someBlock)).to.equal(true);
    })

    it("mint and sell a token", async function() {
        await boundless.mint(someBlock,zeros);
        id = await boundless.getId(someBlock,zeros);
        expect(await boundless.balanceOf(seller.address, id)).to.equal(ethers.BigNumber.from("0x01"));

        await seller.sellToken(boundless.address, id);
        expect(await seller.getCurrentPrice(boundless.address, id)).to.not.equal(ethers.BigNumber.from("0x00"));

        await erc20.approve(seller.address,100000000);
        await seller.buyToken(boundless.address, id);
        expect(await boundless.balanceOf(seller.address, id)).to.equal(ethers.BigNumber.from("0x00"));
        expect(await boundless.balanceOf(buyer.address, id)).to.equal(ethers.BigNumber.from("0x01"));
    });

    it("burn tokens and remint them", async function() {
        await boundless.burn(buyer.address, id, boundless.balanceOf(buyer.address, id));
        expect(await boundless.balanceOf(buyer.address, id)).to.equal(ethers.BigNumber.from("0x00"));
        expect(await boundless.getMinted(id)).to.equal(false);
        await boundless.mint(someBlock,zeros);
        await seller.sellToken(boundless.address, id);
        expect(await seller.getCurrentPrice(boundless.address, id)).to.not.equal(ethers.BigNumber.from("0x00"));
    });

    it("only mint tokens from valid artists", async function() {
        try {
            await boundless.mint(someBlock,ones);
            assert.fail("The transaction should have thrown an error");
        }
        catch (err) {
            assert.include(err.message, "revert", "The error message should contain 'revert'");
        }
    });
});
