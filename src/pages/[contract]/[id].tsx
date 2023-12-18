import type { NextPage } from "next";
import Header from "../../components/header";
import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";
import BotChat from "../../components/botChat";
import DetailLoading from "../../components/loadingSkeleton/detailLoading";
import { useEffect, useState } from "react";

const ProfileId: NextPage = () => {
  const { isConnected, address } = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="bg-primary-50 min-h-screen">
      <Header />
      {isLoading ? (
        <DetailLoading />
      ) : (
        <div className="pt-[120px] max-w-[1280px] mx-auto">
          <h1 className="font-bold text-[40px]">Clive McMuch</h1>
          <div className="flex gap-4 items-center">
            <p className="text-[20px] font-semibold opacity-50">ScumBag #123</p>
            <div className="flex items-center gap-2">
              <Link href={"#"}>
                <Image src="/icons/ethscan.png" width={28} height={28} alt="" />
              </Link>
              <Link href={"#"}>
                <Image src="/icons/opensea.png" width={28} height={28} alt="" />
              </Link>
            </div>
          </div>
          <div className="flex mt-6 gap-[56px] pb-20">
            <div className="w-[520px] grid grid-cols-1 gap-5">
              <div className="flex gap-7">
                <div className="w-[233px] h-[233px] aspect-square rounded-[10px] relative border-[9px] border-white shadow-active">
                  <Image
                    src="/images/demo/1.png"
                    className="rounded-lg"
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <h2 className="text-[30px] font-bold">The Board walk</h2>
                  <p className="text-[20px] font-bold">MetaVerse</p>
                  <p className="text-[20px] font-bold mt-4">
                    Profile Views: 1234
                  </p>
                  <div className="flex items-center gap-5 mt-7">
                    <div className="w-11 h-11 relative rounded-full overflow-hidden">
                      <Image src={"/images/default-avatar.png"} fill alt="" />
                    </div>
                    <div className="">
                      <p className="text-[22px] font-bold ">0xBdCc...Eb03</p>
                      <p className="text-[20px] font-semibold opacity-50">
                        Owner
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-2 border-primary-400 rounded-[10px] bg-white pt-2.5 px-6 pb-4 mt-10">
                <p className="text-[20px] font-bold">mypond URL:</p>
                <Link href={"#"}>
                  <div className="text-primary-300 font-bold text-[14px]">
                    mypond.vercel.io/0x92d65b666c7d740a57efc0799b2d37291967bc70/4596
                  </div>
                </Link>
              </div>

              {/* General Info Beginning */}
              <div className="rounded-[10px] border-2 border-primary-400 overflow-hidden">
                <div className="p-3 bg-primary-300 text-[20px] font-bold text-white">
                  General Info
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Birth Date
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      07/12/2020
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Contract Address
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      <Link
                        href="https://etherscan.io/address/0x3fe1a4c1481c8351e91b64d5c398b159de07cbc5"
                        className="underline"
                      >
                        0x3fe1..cbc5
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Token ID
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      1205
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Standard
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      ERC-721
                    </div>
                  </div>
                </div>
              </div>
              {/* General Info End */}

              {/* Traits Beginning */}
              <div className="rounded-[10px] border-2 border-primary-400 overflow-hidden">
                <div className="p-3 bg-primary-300 text-[20px] font-bold text-white">
                  Traits
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Background
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      Lime IceCreanm
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Clothes
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      Hawaiian
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Skin
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      Rasberry
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Eyes
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      Shades
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                      Hat
                    </div>
                    <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                      Backwards Cap
                    </div>
                  </div>
                </div>
              </div>
              {/* Traits End */}
            </div>
            <div className="w-[calc(100%-574px)]">
              <div className="bg-secondary-300 text-[20px] font-bold text-secondary-400 py-2 px-[18px] rounded-[10px]">
                About {"Clive"}
              </div>
              <p className="text-secondary-500 font-bold text-[20px] mt-5">
                Bio
              </p>
              <p className="text-[20px] leading-[27px] opacity-50 font-semibold mt-0.5">{`Greetings! I am Clive, the most coolest... err, fresh SupDuck in the MetaVerse. I rap with my friends and prank my loved ones. I'm quite a fool for you, so if you're feta up with your old life, join me, and we'll have a gouda time together.`}</p>
              <div className="h-20" />
              <BotChat />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProfileId;
