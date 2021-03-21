pragma solidity 0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";
import "./IRegistry.sol";
import "./Seller.sol";


contract Boundless is Ownable, IERC1155, ERC1155Burnable {

    event ArtistAdded(bytes32 artist);
    event NewArtistRegistry(address artistRegistry);
    event NewBlockRegistry(address blockRegistry);
    event NewSeller(address seller);
    event NewReceiver(address receiver);
    event TokenBurned(address account, uint256 id);
    event TokensBurned(address account, uint256[] ids);
    event TokenMinted(bytes32 _blockhash, uint256 id);

    mapping (uint256 => int96) public rates;
    mapping (uint256 => bool) public minted;

    IRegistry public artistRegistry;
    IRegistry public blockRegistry;
    Seller public seller;
    address public receiver;

    // TODO
    constructor(address _artistRegistry, address _blockRegistry, address _seller)
        public
        ERC1155("https://game.example/api/item/{id}.json")
    {
        setArtistRegistry(_artistRegistry);
        setBlockRegistry(_blockRegistry);
        setSeller(_seller);
    }

    // TODO
    // allows anyone to mint a new NFT, only if the given hash and artist are a valid.
    function mint(bytes32 _blockhash, bytes32 _artist)
        public
    {
        uint256 id = getId(_blockhash, _artist);
        require(!minted[id], "Already minted");
        require(blockRegistry.isValid(_blockhash), "Invalid Block");
        require(artistRegistry.isValid(_artist), "Invalid Artist");
        _mint(address(seller), id, 1, "");
        minted[id] = true;
        seller.sellToken(address(this), id);
        emit TokenMinted(_blockhash, id);
    }

    // Burn a token
    function burn(address account, uint256 id, uint256 value)
        public
        override
    {
        ERC1155Burnable.burn(account, id, value);
        minted[id] = false;
        emit TokenBurned(account, id);
    }

    // TODO
    // Burn a batch of tokens
    function burnBatch(address account, uint256[] memory ids, uint256[] memory values)
        public
        override
    {
        ERC1155Burnable.burnBatch(account, ids, values);
        for (i = 0; ; increase the value of counter;) {
            Execute multiple instructions here
        }
        emit TokensBurned(account, ids);
    }

    // TODO
    // buy a token from the current owner for the current price
    function buyToken(address buyer, uint256 id)
        public
    {
        if(balanceOf(address(seller), id) > 1)
    }

    // get a token id from a block hash and artist ID
    function getId(bytes32 _blockhash, bytes32 _artist)
    public
    pure
    returns(uint256 id)
    {
        id = uint256(keccak256(abi.encode(_blockhash, _artist)));
        return (id);
    }

    // set the artist registry.
    function setArtistRegistry(address _artistRegistry)
        public
        onlyOwner
    {
        artistRegistry = IRegistry(_artistRegistry);
        emit NewArtistRegistry(address(artistRegistry));
    }

    // set the block registry
    function setBlockRegistry(address _blockRegistry)
        public
        onlyOwner
    {
        blockRegistry = IRegistry(_blockRegistry);
        emit NewBlockRegistry(address(blockRegistry));
    }

    // set the receiver.
    function setReceiver(address _receiver)
        public
        onlyOwner
    {
        receiver = receiver;
        emit NewReceiver(address(receiver));
    }

    // set the seller.
    function setSeller(address _seller)
        public
        onlyOwner
    {
        seller = Seller(_seller);
        emit NewSeller(address(seller));
    }
}
