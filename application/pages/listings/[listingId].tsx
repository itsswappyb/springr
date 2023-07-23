import React from "react";
import { useRouter } from "next/router";
import events from "@/data/events.json";
import Image from "next/image";
import { ListingDetailCard } from "@/components/ListingDetailCard";
import { useQuery } from "@airstack/airstack-react";

const ListingDetail = () => {
  // get query params
  const router = useRouter();
  const { eventId } = router.query;

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

  const variables = {
    address: "vitalik.eth",
  };

  const event = events.find((event) => event.id.toString() === eventId);

  const {
    data: vitalikData,
    loading: vitalikLoading,
    error: vitalikError,
  } = useQuery(query, variables, {
    cache: false,
  });

  console.log("vitalikData:", vitalikData);

  const nftData =
    vitalikData && vitalikData?.poap?.data?.map((p: any, i: number) => i !== 0);

  const nftCount = nftData?.length;

  console.log("nftCount: ", nftCount);

  return (
    <div className="p-24 flex justify-center">
      <ListingDetailCard nftCount={nftCount} nftData={nftData} />
    </div>
  );
};

export default ListingDetail;
