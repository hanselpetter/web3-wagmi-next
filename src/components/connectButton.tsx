import { FC } from "react";
import Image from "next/image";
import { useAccount } from "wagmi";
import { DownArrow } from "./svgIcons";
import { useAccountModal } from "@rainbow-me/rainbowkit";

const ConnectButton: FC = () => {
  const { isConnected, address } = useAccount();
  const { openAccountModal } = useAccountModal();
  return (
    <div
      className="flex items-center gap-3 cursor-pointer"
      onClick={openAccountModal}
      style={{
        display: isConnected && address ? "flex" : "none",
      }}
    >
      <div className="w-[33px] h-[33px] rounded-full overflow-hidden relative">
        <Image src={"/images/default-avatar.png"} fill alt="" />
      </div>
      <div className="font-semibold tracking-[7%] text-white">
        {`${address?.slice(0, 6)}...${address?.slice(-4)}`}
      </div>
      <DownArrow />
    </div>
  );
};

export default ConnectButton;
