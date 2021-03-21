pragma solidity 0.6.2;


interface IRegistry {
    function isValid(bytes32 item) external view returns (bool);
}
