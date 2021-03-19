pragma solidity ^0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";

contract Boundless is Ownable, ERC1155, ERC1155Burnable {

  mapping (uint256 => bool) public minted;

  event TokenMinted(bytes blockhash, uint256 id);

  constructor() public ERC1155("https://game.example/api/item/{id}.json") {
  }

  // allows anyone to mint a new NFT
  function mint(bytes32 blockhash)
    public
  {
    uint256 id = uint256(blockhash);
    require(!minted[id], "Already minted");
    _mint(msg.sender, id, 1, "");
    minted[id] = true;
    emit TokenMinted(blockhash, id);
  }

  // get a token id from a block hash
  function getId(string memory blockhash)
    public
    returns(uint256 id)
  {
    uint256 id = uint256(keccak256(bytes(blockhash)));
    return (id);
  }
}
