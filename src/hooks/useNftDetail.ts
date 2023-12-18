import { useQuery } from "@airstack/airstack-react";
import { NftDetail } from "../utils/type";

export const useNftDetail = (tokenAddress: string, tokenId: string) => {
  const query = `
      query MyQuery {
        TokenNft(
          input: {address: "${tokenAddress}", tokenId: "${tokenId}", blockchain: ethereum}
        ) {
          rawMetaData
          type
          token {
            owner {
              addresses
              domains {
                name
              }
            }
          }
          contentValue {
            image {
              original
              small
              medium
              large
              extraSmall
            }
          }
        }
      }
    `;
  const { data, loading, error } = useQuery(query);

  const nft: NftDetail | null =
    data && data.TokenNft
      ? {
          name: data.TokenNft?.rawMetaData?.name,
          description: data.TokenNft?.rawMetaData?.description,
          image: {
            original: data.TokenNft.contentValue.image.original,
            small: data.TokenNft.contentValue.image.small,
            medium: data.TokenNft.contentValue.image.medium,
            large: data.TokenNft.contentValue.image.large,
            extraSmall: data.TokenNft.contentValue.image.extraSmall,
          },
          date: data.TokenNft?.rawMetaData?.date,
          attributes: data.TokenNft?.rawMetaData?.attributes,
          tokenAddress: tokenAddress,
          tokenId: tokenId,
          type: data.TokenNft?.type,
          owner: {
            addresses: data.TokenNft?.token.owner.addresses,
            domains: data.TokenNft?.token.owner.domains,
          },
        }
      : null;
  return { nft, nftLoading: loading, error };
};
