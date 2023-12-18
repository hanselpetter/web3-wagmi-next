import Image from "next/image";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const DisconnectedIntro = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  if (isConnected) return;
  return (
    <div className="min-h-screen grid place-content-center bg-primary-50">
      <div className="w-[860px] rounded-[20px] bg-white flex items-center flex-col pt-5 pb-[56px]">
        <div className="w-[560px] h-[350px] relative">
          <div className="w-[180px] h-[180px] absolute overflow-hidden shadow-card rounded-[21px] -rotate-[17.57deg] z-10 left-5 top-20">
            <Image src="/images/demo/1.png" fill alt="" />
          </div>
          <div className="w-[126px] h-[126px] absolute overflow-hidden shadow-card rounded-[21px] rotate-[14.23deg] left-[220px] z-10 top-2">
            <Image src="/images/demo/2.png" fill alt="" />
          </div>
          <div className="w-[183px] h-[183px] absolute overflow-hidden shadow-card rounded-[21px] rotate-[18deg] right-5 top-20 z-10">
            <Image src="/images/demo/3.png" fill alt="" />
          </div>
          <div className="w-[180px] h-[180px] absolute overflow-hidden shadow-card rounded-[21px] -rotate-[10.12deg] left-[173px] bottom-4">
            <Image src="/images/demo/4.png" fill alt="" />
          </div>
        </div>
        <h1 className="my-[42px] text-[33px] font-semibold tracking-[7%]">
          {"Let's bring your PFP to life!"}
        </h1>
        <button
          onClick={openConnectModal}
          className="rounded-[20px] bg-primary-100 py-4 px-[42px] tracking-[7%] text-[21px] text-white font-semibold"
          title="Open Connect Modal"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default DisconnectedIntro;
