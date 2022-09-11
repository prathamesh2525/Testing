// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol";

contract MyToken is ERC721 {
    constructor(string memory name,string memory symbol)
        ERC721(name,symbol){
            console.log("Name: ",name);
            console.log("Symbol: ", symbol);
            console.log("Sender: ", msg.sender );
        }
}
