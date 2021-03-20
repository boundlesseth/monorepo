pragma solidity 0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155Holder.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

// Puts tokens up for sale with the price reducing over time.

contract Seller is Ownable, ERC1155Holder {

    event NewDuration(uint duration);
    event NewStartPrice(uint256 startPrice);
    event NewReceiver(address receiver);
    event NewNativeToken(address nativeToken);
    event SaleStarted(address tokenContract, uint256 tokenId, uint end);
    event TokenSold(address tokenContract, uint256 tokenId, address buyer, uint256 price, uint256 taxRate);
    event TokenReceived(address tokenContract, uint256 tokenId, uint256 amount);
    event TokensReceived(address tokenContract, uint256[] tokenIds, uint256[] amounts);


    address public receiver;
    IERC20 public nativeToken;
    uint public duration;
    uint256 public startPrice;
    mapping (address => mapping(uint256 => uint)) sales; // tokenContract => tokenID => timestamp when sale ends

    constructor(address _receiver, address _nativeToken, uint _duration) public {
        receiver = _receiver;
        duration = _duration;
        nativeToken = IERC20(_nativeToken);
    }

    // TODO
    // initiates the sale of a token.
    function sellToken(address _tokenContract, uint256 id)
        public
    {
        IERC1155 erc1155 = IERC1155(_tokenContract);
        uint end = sales[address(erc1155)][id];
        require(erc1155.balanceOf(address(this), id) > 0, "Seller has no balance in this token.");
        require(end < 1, "Token already on sale.");
        end = block.timestamp + duration;
        emit SaleStarted(address(erc1155), id, end);
    }

    // TODO
    // buy a token that is currently on sale.
    function buyToken(address _tokenContract, uint256 id)
        public
    {
        IERC1155 erc1155 = IERC1155(_tokenContract);
        require(erc1155.balanceOf(address(this), id) > 0, "Seller has no balance in this token.");
        nativeToken.transferFrom(msg.sender, receiver, getCurrentPrice(address(erc1155), id));
    }

    // TODO
    // get the current price of a token currently on sale.
    function getCurrentPrice(address _tokenContract, uint256 id)
        public
        view
        returns(uint price)
    {
        // uint end = sales[_tokenContract][id];
        // uint remaining = sub(end, block.timestamp);
        // uint percent = div(remaining, duration);
        // uint price = mul(startPrice, percent);
    }

    // set the length of time that each sale should last.
    // should only be callable by Owner.
    function setDuration(uint _duration)
        public
        onlyOwner
    {
        duration = _duration;
        emit NewDuration(duration);
    }

    // set the start price in the base unit of native token.
    function setStartPrice(uint256 _startPrice)
        public
        onlyOwner
    {
        startPrice = _startPrice;
        emit NewStartPrice(startPrice);
    }

    // set the address that should receive the proceeds of sales.
    function setReceiver(address _receiver)
        public
        onlyOwner
    {
        receiver = _receiver;
        emit NewReceiver(receiver);
    }

    // set the native token used for sales.
    function setNativeToken(address _nativeToken)
        public
        onlyOwner
    {
        nativeToken = IERC20(_nativeToken);
        emit NewNativeToken(address(nativeToken));
    }
}
