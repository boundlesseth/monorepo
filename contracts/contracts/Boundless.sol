pragma solidity ^0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";

contract Boundless is Ownable, ERC1155, ERC1155Burnable {

  mapping (uint256 => bool) public minted;
  uint8 artists;

  event TokenMinted(bytes32 _blockhash, uint256 id);
  event ArtistAdded(uint8 artists);
  event TokenBurned(uint256 id)

  // TODO
  constructor(uint8 _artists) public ERC1155("https://game.example/api/item/{id}.json") {
    artists = _artists;
  }

  // TODO
  // allows anyone to mint a new NFT, only if the given hash is a valid block hash (provable by current block hash) and has not already been minted.
  function mint(bytes32 _blockhash, uint8 artist)
    public
  {
    uint256 id = getId(_blockhash, artist);
    require(!minted[id], "Already minted");
    require(isValid(_blockhash), "Invalid _blockhash");
    _mint(msg.sender, id, 1, "");
    minted[id] = true;
    emit TokenMinted(_blockhash, id);
  }

  // get a token id from a block hash and artist ID
  function getId(bytes32 _blockhash, uint8 artist)
    public
    pure
    returns(uint256 id)
  {
    id = uint256(_blockhash) + artist;
    return (id);
  }

  // TODO
  // checks if a given block hash is corresponds to a real historic block.
  function isValid(bytes32 _blockhash)
    public
    pure
    returns (bool valid)
  {
    return (true);
  }

  function addArtist()
  public
  onlyOwner
  {
    artists ++;
    emit ArtistAdded(artists);
  }

  // Burn a token
  function burn(address account, uint256 id, uint256 value)
    public
    virtual
    override
  {
    ERC1155Burnable.burn(account,id, value);
    emit TokenBurned(id)
  }

  // Burn a batch of tokens
  function burnBatch(address account, uint256[] memory ids, uint256[] memory values)
    public
    virtual
    override
  {
    ERC1155Burnable.burnBatch(account,ids, values);
  }
}
