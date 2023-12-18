import { useQuery } from "@airstack/airstack-react";

export const useWalletData = (userAdderss: string, blockchain?: string) => {
  const query = `
    query MyQuery {
        Wallet(
        input: {identity: "${userAdderss}", blockchain: ${
    blockchain ? blockchain : "ethereum"
  }}
        ) {
        domains {
            name
            isPrimary
            tokenNft {
            contentValue {
                image {
                extraSmall
                large
                medium
                original
                small
                }
            }
            }
        }
        }
    }
    `;
  const { data, loading, error } = useQuery(query);
  
  let name: string | null = null;
  let ensImage: string | null = null;

  if (data && data.Wallet) {
    const domains = data.Wallet?.domains;
    if (domains && domains.length !== 0) {
      name = domains.find((domain: any) => domain.isPrimary).name;
      ensImage = domains.find((domain: any) => domain.isPrimary).tokenNft
        .contentValue.image.medium;
    }
  }
  return { name, ensImage, loading, error };
};
