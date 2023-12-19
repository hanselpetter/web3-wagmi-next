import { FC, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAccount, useDisconnect } from "wagmi";
import { DownArrow } from "./svgIcons";
import { useWalletData } from "../hooks/useWalletData";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import copy from "copy-to-clipboard";

const ConnectButton: FC = () => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { pathname } = useRouter();
  const [copied, setCopied] = useState(false);
  const { disconnect } = useDisconnect();
  const { name, ensImage, loading } = useWalletData(address as string);

  // Copy Wallet Address
  const hanldeCopy = () => {
    setCopied(true);
    copy(address as string);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  if (!isConnected) {
    // Disconnected State
    return pathname !== "/" ? (
      <button
        className="border-2 rounded-lg py-1.5 px-4 lg:px-8 text-white font-bold text-sm lg:text-lg hover:shadow-active"
        onClick={openConnectModal}
      >
        Connect Wallet
      </button>
    ) : (
      <></>
    );
  } else {
    // Connected State
    return (
      <div
        className="flex items-center gap-3 cursor-pointer relative group"
        style={{
          display: isConnected && address ? "flex" : "none",
        }}
      >
        <div className="w-[33px] h-[33px] rounded-full overflow-hidden relative">
          {loading ? (
            <div className="w-full h-full animate-pulse bg-primary-200 rounded-full" />
          ) : ensImage ? (
            <Image src={ensImage} fill alt="" />
          ) : (
            <Image src={"/images/default-avatar.png"} fill alt="" />
          )}
        </div>
        {loading ? (
          <div className="rounded w-[100px] h-5 animate-pulse bg-primary-200 hidden lg:block" />
        ) : (
          <div className="font-semibold tracking-[7%] text-white hidden lg:block">
            {name ? name : `${address?.slice(0, 6)}...${address?.slice(-4)}`}
          </div>
        )}
        {!loading && <DownArrow />}
        <div className="absolute top-8 right-0 w-[160px] hidden group-hover:block pt-2">
          <div className="bg-white p-2 shadow-active rounded">
            <button
              className="w-full bg-primary-100 rounded py-1 text-white font-semibold hover:bg-primary-300"
              onClick={hanldeCopy}
            >
              {copied ? "Copied!" : "Copy Address"}
            </button>
            <button
              className="w-full bg-primary-100 rounded py-1 text-white font-semibold mt-2 hover:bg-primary-300"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ConnectButton;
