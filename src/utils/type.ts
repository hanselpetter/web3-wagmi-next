export interface PfpItemType {
  contract: string;
  id: number;
  image: string;
}

export interface Chat {
  role: "ai" | "user";
  content: string;
}

export interface ItemInList {
  tokenAddress: string;
  tokenId: string;
  tokenNfts: {
    contentValue: {
      image: {
        extraSmall: string;
        large: string;
        medium: string;
        small: string;
      };
    };
  };
}

export interface NftDetail {
  attributes: { trait_type: string; value: string }[];
  date: number;
  name: string;
  tokenId: string;
  tokenAddress: string;
  description: string;
  image: {
    original: string;
    small: string;
    medium: string;
    large: string;
    extraSmall: string;
  };
  type: string;
  owner: {
    addresses: string[];
    domains: string[] | null;
  };
}

export interface UserProfile {
  name: {
    firstName: "";
    lastName: "";
  };
  bio: "";
}
