// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract demo{
  uint num;
  function setNum(uint _num) public{
    num = _num;
  }
  function getNum() public view returns(uint){
    return num;
  }
}
