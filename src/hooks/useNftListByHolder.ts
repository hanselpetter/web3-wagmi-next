import { useQuery } from "@airstack/airstack-react";
import { WHITELIST_COLLECTIONS } from "../config";
import { ItemInList } from "../utils/type";

export const useNftListByHolder = (holder: string[]) => {
  const query = `
    query MyQuery {
        TokenBalances(
          input: {
            filter: {
              tokenAddress: { _in: [${WHITELIST_COLLECTIONS.map(
                (collection) => `"${collection}"`
              )}] }
              owner: {
                _in: "${holder}"
              }
              tokenType: { 
                _in: [ERC1155, ERC721] 
              }
            }
            blockchain: ethereum
          }
        ) {
          TokenBalance {
            tokenAddress
            tokenId
            tokenType
            tokenNfts {
              contentValue {
                image {
                  extraSmall
                  small
                  medium
                  large
                }
              }
            }
          }
        }
      }
    `;
  const { data, loading, error } = useQuery(query);
  const nfts: ItemInList[] = data?.TokenBalances?.TokenBalance;
  return { nfts, loading, error };
};
