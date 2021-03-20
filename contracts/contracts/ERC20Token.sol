pragma solidity 0.6.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract AnyOldERC20Token is ERC20 {
    constructor(uint256 initialSupply)
        public
        ERC20("Any old ERC20 token", "AOE")
    {
        _mint(msg.sender, initialSupply);
    }
}
