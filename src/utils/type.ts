export interface PfpItemType {
  contract: string;
  id: number;
  image: string;
}

export interface Chat {
  role: "ai" | "user";
  content: string;
}
