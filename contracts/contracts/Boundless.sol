pragma solidity 0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";
import "./IRegistry.sol";


contract Boundless is Ownable, IERC1155, ERC1155Burnable {

    event ArtistAdded(bytes32 artist);
    event NewArtistRegistry(address artistRegistry);
    event NewBlockRegistry(address blockRegistry);
    event TokenBurned(address account, uint256 id);
    event TokensBurned(address account, uint256[] ids);
    event TokenMinted(bytes32 _blockhash, uint256 id);

    mapping (uint256 => uint) public rates;
    mapping (uint256 => bool) public minted;

    IRegistry public artistRegistry;
    IRegistry public blockRegistry;

    // TODO
    constructor(address _artistRegistry, address _blockRegistry)
        public
        ERC1155("https://game.example/api/item/{id}.json")
    {
        setArtistRegistry(_artistRegistry);
        setBlockRegistry(_blockRegistry);
    }

    // TODO
    // allows anyone to mint a new NFT, only if the given hash and artist are a valid.
    function mint(bytes32 _blockhash, bytes32 _artist)
        public
    {
        uint256 id = getId(_blockhash, _artist);
        require(!minted[id], "Already minted");
        blockRegistry.isValid(_blockhash);
        artistRegistry.isValid(_artist);
        _mint(msg.sender, id, 1, "");
        minted[id] = true;
        emit TokenMinted(_blockhash, id);
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

    // Burn a token
    function burn(address account, uint256 id, uint256 value)
        public
        override
    {
        ERC1155Burnable.burn(account, id, value);
        emit TokenBurned(account, id);
    }

    // Burn a batch of tokens
    function burnBatch(address account, uint256[] memory ids, uint256[] memory values)
        public
        override
    {
        ERC1155Burnable.burnBatch(account, ids, values);
        emit TokensBurned(account, ids);
    }

    // set the native token used for sales.
    function setArtistRegistry(address _artistRegistry)
        public
        onlyOwner
    {
        artistRegistry = IRegistry(_artistRegistry);
        emit NewArtistRegistry(address(artistRegistry));
    }

    // set the native token used for sales.
    function setBlockRegistry(address _blockRegistry)
        public
        onlyOwner
    {
        blockRegistry = IRegistry(_blockRegistry);
        emit NewBlockRegistry(address(blockRegistry));
    }
}
