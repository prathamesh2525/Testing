// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "hardhat/console.sol";

contract Counter{
    uint public count;

    constructor(uint n){
        count = n;
    }

    function getCounter() public view returns(uint){
        return count;
    }

    function increment(uint n) public returns(uint){
        console.log("Count: ",count);
        count = count + n;
        console.log("Count: ", count);
        return count;
    }

    function decrement(uint n) public returns(uint){
        console.log("Count: ",count);
        count = count - n;
        console.log("Count: ", count);
        return count;
    }

    function multiply(uint n) public returns(uint){
        console.log("Count: ",count);
        count = count * n;
        console.log("Count: ", count);
        return count;
    }
    function divide(uint n) public returns(uint){
        console.log("Count: ",count);
        count = count / n;
        console.log("Count: ", count);
        return count;
    }
}
