//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// import "../node_modules/hardhat/console.sol";

interface IERC721 {
    function transferFrom(
        address _from,
        address _to,
        uint256 _id
    ) external;
}

contract Escrow {
    address public nftAddress;
    address payable public host;
    address public inspector;

    modifier onlyGuest(uint256 _nftID) {
        require(msg.sender == guest[_nftID], "Only guest can call this method");
        _;
    }

    modifier onlyHost() {
        require(msg.sender == host, "Only host can call this method");
        _;
    }

    modifier onlyInspector() {
        require(msg.sender == inspector, "Only inspector can call this method");
        _;
    }

    mapping(uint256 => bool) public isListed;
    mapping(uint256 => uint256) public purchasePrice;
    mapping(uint256 => uint256) public escrowAmount;
    mapping(uint256 => address) public guest;
    mapping(uint256 => bool) public inspectionPassed;
    mapping(uint256 => mapping(address => bool)) public approval;

    constructor(
        address _nftAddress,
        address payable _host,
        address _inspector
    ) {
        nftAddress = _nftAddress;
        host = _host;
        inspector = _inspector;
    }

    function list(
        uint256 _nftID,
        uint256 _purchasePrice
    ) public payable onlyHost {
        // Transfer NFT from host to this contract
        IERC721(nftAddress).transferFrom(msg.sender, address(this), _nftID);

        isListed[_nftID] = true;
        purchasePrice[_nftID] = _purchasePrice;
   
    }

    // Put Under Contract (only guest - payable escrow)
    function depositEarnest(uint256 _nftID) public payable {
        require(guest[_nftID] == address(0), "Guest already exists!");
        require(msg.value >= purchasePrice[_nftID], "Insufficient funds!");
        guest[_nftID] = msg.sender;
    }

    // Update Inspection Status (only inspector)
    function updateInspectionStatus(uint256 _nftID, bool _passed)
        public
        onlyInspector
    {
        inspectionPassed[_nftID] = _passed;
    }

    // Approve Sale
    function approveSale(uint256 _nftID) public {
        approval[_nftID][msg.sender] = true;
    }

    // Finalize Sale
    // -> Require inspection status (add more items here, like appraisal)
    // -> Require sale to be authorized
    // -> Require funds to be correct amount
    // -> Transfer NFT to guest
    // -> Transfer Funds to host
    function finalizeSale(uint256 _nftID) onlyGuest(_nftID) public {
        require(inspectionPassed[_nftID], "Inspection not passed!");
        require(approval[_nftID][guest[_nftID]], "Guest not approved!");
        require(approval[_nftID][host], "Host not approved!");
        require(address(this).balance >= purchasePrice[_nftID], "Insufficient funds!");

        isListed[_nftID] = false;
        guest[_nftID] = msg.sender;

        (bool success, ) = payable(host).call{value: address(this).balance}(
            ""
        );
        require(success, "Transfer failed");

        IERC721(nftAddress).transferFrom(address(this), guest[_nftID], _nftID);
    }

    // Cancel Sale (handle earnest deposit)
    // -> if inspection status is not approved, then refund, otherwise send to host
    function cancelSale(uint256 _nftID) public {
        if (inspectionPassed[_nftID] == false) {
            (bool success, ) = payable(guest[_nftID]).call{
                value: address(this).balance
            }("");
            require(success, "Transfer failed.");
        } else {
            (bool success, ) = payable(host).call{value: address(this).balance}(
                ""
            );
            require(success, "Transfer failed.");
        }
    }

    receive() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}