pragma solidity 0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";


contract OpenRegistry {
    event ItemAdded(bytes32 item);

    function isValid(bytes32 _item)
        external
        view
        returns (bool)
    {
        return(true);
    }
}
