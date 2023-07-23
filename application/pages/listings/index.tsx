import React from "react";
import { useQuery } from "@airstack/airstack-react";
import { useAddress } from "@thirdweb-dev/react";

const Listings = () => {
  const query = `query tokens($address: Identity!) {
  erc20: TokenBalances(
    input: {filter: {owner: {_in: [$address]}, tokenType: {_in: [ERC20]}}, limit: 10, blockchain: ethereum}
  ) {
    data:TokenBalance {
      amount
      formattedAmount
      chainId
      id
      tokenAddress
      tokenId
      tokenType
      token {
        name
        symbol
      }
    }
  }
  erc721: TokenBalances(
    input: {filter: {owner: {_in: [$address]}, tokenType: {_in: [ERC721]}, tokenAddress: {_nin: ["0x22C1f6050E56d2876009903609a2cC3fEf83B415"]}}, limit: 10, blockchain: ethereum}
  ) {
    data:TokenBalance {
      amount
      chainId
      id
      tokenAddress
      tokenId
      tokenType
      token {
        name
        symbol
      }
      tokenNfts {
        tokenId
        metaData {
          name
        }
        contentValue {
          image {
            medium
            extraSmall
            large
            original
            small
          }
        }
      }
    }
  }
  poap: TokenBalances(
    input: {filter: {owner: {_in: [$address]}, tokenAddress: {_eq: "0x22C1f6050E56d2876009903609a2cC3fEf83B415"}}, limit: 10, blockchain: ethereum}
  ) {
    data:TokenBalance {
      amount
      tokenAddress
      tokenId
      tokenType
      token {
        name
        symbol
      }
      tokenNfts {
        metaData {
          name
        }
        tokenURI
      }
    }
  }
}`;

  const query2 = `query tokens($address1: Identity!, $address2: Identity!) {
  TokenBalances1: TokenBalances(
    input: {filter: {owner: {_eq: $address1}, tokenType: {_in: [ERC20, ERC721]}}, blockchain: ethereum, limit: 50}
  ) {
    TokenBalance {
      tokenAddress
      tokenId
      tokenType
      owner {
        addresses
      }
      tokenNfts {
        address
        tokenId
        blockchain
      }
    }
  }
  TokenBalances2: TokenBalances(
    input: {filter: {owner: {_eq: $address2}, tokenType: {_in: [ERC20, ERC721]}}, blockchain: ethereum, limit: 50}
  ) {
    TokenBalance {
      tokenAddress
      tokenId
      tokenType
      owner {
        addresses
      }
      tokenNfts {
        address
        tokenId
        blockchain
      }
    }
  }
  owner1: TokenBalance(input: {blockchain: ethereum, owner`;

  const address = useAddress();

  const variables = {
    address: "itsswappyb.eth",
  };

  const variables2 = {
    address: "vitalik.eth",
  };

  const { data, loading, error } = useQuery(query, variables, {
    cache: false,
  });

  const {
    data: vitalikData,
    loading: vitalikLoading,
    error: vitalikError,
  } = useQuery(query, variables2, {
    cache: false,
  });

  console.log("address:", address);
  console.log("data:", data);
  console.log("vitalikData:", vitalikData);
  return (
    <div>
      <h3>Listings page</h3>
    </div>
  );
};

export default Listings;
