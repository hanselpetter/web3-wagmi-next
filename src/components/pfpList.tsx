import Image from "next/image";
import { FC, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { PfpItemType } from "../utils/type";
import { useClickAway } from "../hooks/useClickAway";
import { useRouter } from "next/router";

const PfpList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [selected, setSelected] = useState<PfpItemType | undefined>();

  const { isConnected } = useAccount();

  const generateRef = useRef<HTMLButtonElement | null>(null);

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
          <div className="grid grid-cols-5 gap-5 max-h-[480px] custom-scrollbar overflow-auto pr-2">
            {selected && (
              <div className="absolute left-0 top-0 w-full h-full grid place-content-center z-30">
                <div
                  ref={previewRef as React.RefObject<HTMLDivElement>}
                  className="w-[200px] h-[200px] relative shadow-active border-[9px] border-white z-10 overflow-hidden rounded-[16px]"
                >
                  <Image
                    src={selected.image}
                    className="rounded-[10px]"
                    objectFit="cover"
                    alt=""
                    fill
                  />
                </div>
                <div className="bg-white opacity-70 absolute left-0 top-0 w-full h-full" />
              </div>
            )}
            {items.map((item, key) => (
              <PfpItem
                item={item}
                setSelected={() => {
                  setSelected(item);
                }}
                key={key}
              />
            ))}
          </div>
        </div>
        <div className="text-right mt-4">
          <button
            className="py-4 px-9 rounded-[20px] text-[21px] font-semibold text-white bg-primary-100 disabled:bg-primary-200 disabled:cursor-not-allowed"
            disabled={selected === undefined}
            ref={generateRef}
            onClick={() =>
              router.push(`/${selected?.contract}/${selected?.id}`)
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
  item: PfpItemType;
  setSelected: () => void;
}

export const PfpItem: FC<ItemProps> = ({ item, setSelected }) => {
  const { contract, id, image } = item;
  return (
    <div
      className="relative overflow-hidden rounded-[10px] aspect-square cursor-pointer hover:scale-105 duration-150"
      onClick={setSelected}
    >
      <Image src={image} fill alt="" />
    </div>
  );
};

const items = [
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 1,
    image: "/images/demo/1.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 2,
    image: "/images/demo/2.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 3,
    image: "/images/demo/3.png",
  },
  {
    contract: "0x32dD588f23a95280134107A22C064cEA065327E9",
    id: 4,
    image: "/images/demo/4.png",
  },
];
