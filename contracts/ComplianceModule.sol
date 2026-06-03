// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title Compliance Module
contract ComplianceModule {
    address public admin;
    mapping(address => bool) public isApproved;

    constructor() {
        admin = msg.sender;
    }

    function approveAddress(address user) external {
        require(msg.sender == admin, "Only admin");
        isApproved[user] = true;
    }

    function isCompliant(address user) external view returns (bool) {
        return isApproved[user];
    }
}