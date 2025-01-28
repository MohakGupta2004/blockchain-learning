// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Demo{
    uint public num;

    function setter(uint _num) public {
        num = _num+1;
    }   

    function getter() public view returns(uint){
        return num;
    }
}
