pragma solidity 0.6.2;

import "@openzeppelin/contracts/access/Ownable.sol";


contract Registry is Ownable {
    event ItemAdded(bytes32 item);
    event ItemRemoved(bytes32 item);

    mapping (bytes32 => bool) items;

    function isValid(bytes32 _item)
        external
        view
        returns (bool)
    {
        return(items[_item]);
    }

    function addItem(bytes32 _item)
        public
        onlyOwner
    {
        require(items[_item] == false, "Already on registry.");
        items[_item] = true;
        emit ItemAdded(_item);
    }

    function removeItem(bytes32 _item)
        public
        onlyOwner
    {
        require(items[_item] != false, "Not on registry.");
        items[_item] = false;
        emit ItemRemoved(_item);
    }
}
