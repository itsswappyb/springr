import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Escrow__factory } from "../typechain-types/factories/contracts/Escrow.sol/Escrow__factory";
import { Escrow } from "../typechain-types/contracts/Escrow.sol/Escrow";
import { SpringrListing } from "../typechain-types/contracts/SpringrListing";
import { SpringrListing__factory } from "../typechain-types/factories/contracts/SpringrListing__factory";
const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n: number) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  let guest: SignerWithAddress,
    guest2: SignerWithAddress,
    host: SignerWithAddress,
    host2: SignerWithAddress,
    inspector: SignerWithAddress,
    lender: SignerWithAddress;

  let springrListing: SpringrListing, escrow: Escrow, escrow2: Escrow;

  beforeEach(async () => {
    // Setup accounts
    [guest, guest2, host, host2, inspector, lender] = await ethers.getSigners();

    // Deploy Real Estate
    const SpringrListingFactory: SpringrListing__factory =
      await ethers.getContractFactory("SpringrListing");
    springrListing = await SpringrListingFactory.deploy();

    // Mint
    let transaction = await springrListing
      .connect(host)
      .mint(
        "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS"
      );
    await transaction.wait();

    transaction = await springrListing
      .connect(host2)
      .mint(
        "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS"
      );
    await transaction.wait();

    // Deploy Escrow
    const Escrow: Escrow__factory = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      springrListing.address,
      host.address,
      inspector.address,
      lender.address
    );

    const Escrow2: Escrow__factory = await ethers.getContractFactory("Escrow");
    escrow2 = await Escrow2.deploy(
      springrListing.address,
      host2.address,
      inspector.address,
      lender.address
    );

    // Approve Property
    transaction = await springrListing.connect(host).approve(escrow.address, 1);
    await transaction.wait();

    transaction = await springrListing
      .connect(host2)
      .approve(escrow2.address, 2);
    await transaction.wait();

    // List Property
    transaction = await escrow
      .connect(host)
      .list(1, guest.address, tokens(10), tokens(5));
    await transaction.wait();

    transaction = await escrow2
      .connect(host2)
      .list(2, guest.address, tokens(10), tokens(5));
  });

  describe("Deployment", () => {
    it("Returns NFT address", async () => {
      const result = await escrow.nftAddress();
      expect(result).to.be.equal(springrListing.address);
    });

    it("Returns host", async () => {
      const result = await escrow.host();
      expect(result).to.be.equal(host.address);
    });

    it("Returns inspector", async () => {
      const result = await escrow.inspector();
      expect(result).to.be.equal(inspector.address);
    });

    it("Returns lender", async () => {
      const result = await escrow.lender();
      expect(result).to.be.equal(lender.address);
    });
  });

  describe("Listing", () => {
    it("Updates as listed", async () => {
      const result = await escrow.isListed(1);
      expect(result).to.be.equal(true);
    });

    it("Returns guest", async () => {
      const result = await escrow.guest(1);
      expect(result).to.be.equal(guest.address);
    });

    it("Returns purchase price", async () => {
      const result = await escrow.purchasePrice(1);
      expect(result).to.be.equal(tokens(10));
    });

    it("Returns escrow amount", async () => {
      const result = await escrow.escrowAmount(1);
      expect(result).to.be.equal(tokens(5));
    });

    it("Updates ownership", async () => {
      expect(await springrListing.ownerOf(1)).to.be.equal(escrow.address);
    });
  });

  describe("Deposits", () => {
    beforeEach(async () => {
      const transaction = await escrow
        .connect(guest)
        .depositEarnest(1, { value: tokens(5) });
      await transaction.wait();
    });

    it("Updates contract balance", async () => {
      const result = await escrow.getBalance();
      expect(result).to.be.equal(tokens(5));
    });
  });

  describe("Inspection", () => {
    beforeEach(async () => {
      const transaction = await escrow
        .connect(inspector)
        .updateInspectionStatus(1, true);
      await transaction.wait();
    });

    it("Updates inspection status", async () => {
      const result = await escrow.inspectionPassed(1);
      expect(result).to.be.equal(true);
    });
  });

  describe("Approval", () => {
    beforeEach(async () => {
      let transaction = await escrow.connect(guest).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(host).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(lender).approveSale(1);
      await transaction.wait();
    });

    it("Updates approval status", async () => {
      expect(await escrow.approval(1, guest.address)).to.be.equal(true);
      expect(await escrow.approval(1, host.address)).to.be.equal(true);
      expect(await escrow.approval(1, lender.address)).to.be.equal(true);
    });
  });

  describe("Sale", () => {
    beforeEach(async () => {
      let transaction = await escrow
        .connect(guest)
        .depositEarnest(1, { value: tokens(5) });
      await transaction.wait();

      transaction = await escrow
        .connect(inspector)
        .updateInspectionStatus(1, true);
      await transaction.wait();

      transaction = await escrow.connect(guest).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(host).approveSale(1);
      await transaction.wait();

      transaction = await escrow.connect(lender).approveSale(1);
      await transaction.wait();

      await lender.sendTransaction({ to: escrow.address, value: tokens(5) });

      transaction = await escrow.connect(host).finalizeSale(1);
      await transaction.wait();
    });

    it("Updates ownership", async () => {
      expect(await springrListing.ownerOf(1)).to.be.equal(guest.address);
    });

    it("Updates balance", async () => {
      expect(await escrow.getBalance()).to.be.equal(0);
    });
  });
});
