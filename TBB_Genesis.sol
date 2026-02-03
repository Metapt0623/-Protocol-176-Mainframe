// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title Protocol-176-Mainframe
 * @dev 17.6亿 TBB 经典代币创世合约
 */
contract TBB_Genesis {
    string public name = "TBB Genesis";
    string public symbol = "TBB";
    uint8 public decimals = 18;
    uint256 public totalSupply = 1760000000 * 10**18;

    // 锁定 7 个关键钱包地址的空间
    address[7] public genesisWallets;

    constructor() {
        // 第一个钱包：0x6524673Bf485087F869A680C508493540aC55353
        genesisWallets[0] = 0x6524673Bf485087F869A680C508493540aC55353;
    }
}
