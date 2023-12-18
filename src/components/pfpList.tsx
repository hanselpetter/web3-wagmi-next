import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { ItemInList, PfpItemType } from "../utils/type";
import { useClickAway } from "../hooks/useClickAway";
import { useRouter } from "next/router";
import { useNftListByHolder } from "../hooks/useNftListByHolder";

const PfpList = () => {
  const router = useRouter();

  const { nfts, loading } = useNftListByHolder([
    "0x0c12479BCCcb1023DdF9b18c904b13539c123dC4",
  ]);

  const [selected, setSelected] = useState<ItemInList | undefined>();

  const { isConnected } = useAccount();

  const generateRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {});

  const previewRef = useClickAway(() => {
    setSelected(undefined);
  }, [generateRef]);

  if (!isConnected) return;

  return (
    <div className="min-h-screen grid place-content-center bg-primary-50">
      <div className="bg-white w-[860px] rounded-[20px] py-6 px-9">
        <h1 className="my-5 text-[33px] font-semibold tracking-[7%]">
          Select a pfp to make profile
        </h1>
        <div className=" relative">
          {loading ? (
            <div className="grid grid-cols-5 gap-5 max-h-[480px] custom-scrollbar overflow-auto pr-2">
              {Array.from({ length: 15 }).map((_, key) => (
                <div
                  className="rounded-[10px] animate-pulse aspect-square bg-primary-200"
                  key={key}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-5 gap-5 max-h-[480px] custom-scrollbar overflow-auto pr-2">
              {selected && (
                <div className="absolute left-0 top-0 w-full h-full grid place-content-center z-30">
                  <div
                    ref={previewRef as React.RefObject<HTMLDivElement>}
                    className="w-[200px] h-[200px] bg-white relative shadow-active border-[9px] border-white z-10 overflow-hidden rounded-[16px]"
                  >
                    <Image
                      src={selected.tokenNfts.contentValue.image.medium}
                      className="rounded-[10px]"
                      objectFit="cover"
                      loading="lazy"
                      alt=""
                      fill
                    />
                  </div>
                  <div className="bg-white opacity-70 absolute left-0 top-0 w-full h-full" />
                </div>
              )}
              {nfts &&
                nfts.length !== 0 &&
                nfts.map((item, key) => (
                  <PfpItem
                    item={item}
                    setSelected={() => {
                      setSelected(item);
                    }}
                    key={key}
                  />
                ))}
            </div>
          )}
        </div>
        <div className="text-right mt-4">
          <button
            className="py-4 px-9 rounded-[20px] text-[21px] font-semibold text-white bg-primary-100 disabled:bg-primary-200 disabled:cursor-not-allowed"
            disabled={selected === undefined}
            ref={generateRef}
            onClick={() =>
              router.push(`/${selected?.tokenAddress}/${selected?.tokenId}`)
            }
          >
            Generate Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PfpList;

interface ItemProps {
  item: ItemInList;
  setSelected: () => void;
}

export const PfpItem: FC<ItemProps> = ({ item, setSelected }) => {
  const { tokenNfts } = item;
  return (
    <div
      className="relative overflow-hidden rounded-[10px] aspect-square cursor-pointer hover:scale-105 duration-150"
      onClick={setSelected}
    >
      <Image src={tokenNfts.contentValue.image.small} fill alt="" />
    </div>
  );
};
