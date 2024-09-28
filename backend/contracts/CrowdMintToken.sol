// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CrowdMintToken is ERC20 {

constructor(uint256 _initialSupply) ERC20("Mintz", "MNZ") {
    _mint(msg.sender, _initialSupply);
}
}
