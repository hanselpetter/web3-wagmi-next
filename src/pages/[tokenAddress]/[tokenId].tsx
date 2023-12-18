import type { NextPage } from "next";
import Header from "../../components/header";
import Link from "next/link";
import Image from "next/image";
import BotChat from "../../components/botChat";
import DetailLoading from "../../components/loadingSkeleton/detailLoading";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useNftDetail } from "../../hooks/useNftDetail";
import moment from "moment";
import { generateText } from "../../utils/generateText";
import { UserProfile } from "../../utils/type";

const ProfileId: NextPage = () => {
  const [generating, setGenerating] = useState(true);
  const { query } = useRouter();

  const [profile, setProfile] = useState<UserProfile | undefined | null>();

  const { nft, nftLoading } = useNftDetail(
    query.tokenAddress as string,
    query.tokenId as string
  );

  const getProfile = async () => {
    if (nft && !nftLoading) {
      const prompt = `Give my friend a NAME(first and last name) and BIOGRAPHY(60 - 70 words) they are a ${
        nft.name.split("#")[0]
      } with ${nft.attributes
        .map((item: any) => `${item.key || item.trait_type}: ${item.value}`)
        .join(", ")}. Please provide with json data like 
        {
          name: {
            firstName: FIRSTNAME,
            lastName: LASTNAME
          },
          bio: BIOGRAPHY
        }
        `;
      console.log("prompt", prompt);
      setGenerating(true);
      const data = await generateText({
        prompt,
        topic: "",
      });
      if (data) {
        console.log(data);

        const sanitizedData = data.replace(/"([^"]+)":/g, (match, p1) => {
          // Replace double quotes within strings
          const sanitizedString = p1.replace(/"/g, '\\"');
          return `"${sanitizedString}":`;
        });

        const userData = JSON.parse(sanitizedData);
        setProfile({
          name: {
            firstName: userData.name.firstName,
            lastName: userData.name.lastName,
          },
          bio: userData.bio,
        });
        setGenerating(false);
      }
    }
  };

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line
  }, [nft?.attributes]);

  return (
    <main className="bg-primary-50 min-h-screen">
      <Header />
      {nftLoading ? (
        <DetailLoading />
      ) : (
        nft && (
          <div className="pt-[120px] w-[calc(100%-40px)] xl:max-w-[1280px] mx-5 xl:mx-auto">
            {generating ? (
              <div className="w-[200px] h-9 mb-2 rounded animate-pulse bg-primary-200" />
            ) : (
              profile && (
                <h1 className="font-bold text-[40px]">{`${profile.name.firstName} ${profile.name.lastName}`}</h1>
              )
            )}
            <div className="flex gap-4 items-center">
              <p className="text-[20px] font-semibold opacity-50">{nft.name}</p>
              <div className="flex items-center gap-2">
                <Link href={"#"}>
                  <Image
                    src="/icons/ethscan.png"
                    width={28}
                    height={28}
                    alt=""
                  />
                </Link>
                <Link href={"#"}>
                  <Image
                    src="/icons/opensea.png"
                    width={28}
                    height={28}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="flex mt-6 gap-[56px] pb-20">
              <div className="w-[520px] grid grid-cols-1 gap-5">
                <div className="flex gap-7">
                  <div className="w-[233px] h-[233px] aspect-square rounded-[10px] relative border-[9px] border-white shadow-active">
                    <Image
                      src={nft.image.medium}
                      className="rounded-lg"
                      alt={nft.name}
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
                        {moment(nft.date).format("MM/DD/YYYY")}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                        Contract Address
                      </div>
                      <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                        <Link
                          href={`https://etherscan.io/address/${nft.tokenAddress}`}
                          className="underline"
                        >
                          {`${nft.tokenAddress.slice(
                            0,
                            6
                          )}...${nft.tokenAddress.slice(-4)}`}
                        </Link>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                        Token ID
                      </div>
                      <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                        {nft.tokenId}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                        Standard
                      </div>
                      <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                        {nft.type}
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
                    {nft.attributes.map((attr: any, key) => (
                      <div className="flex gap-3" key={key}>
                        <div className="w-[170px] px-2 py-1.5 rounded-sm bg-secondary-100 text-primary-300 font-bold text-[18px]">
                          {attr.key ? attr.key : attr.trait_type}
                        </div>
                        <div className="w-[calc(100%-182px)] px-2 py-1.5 rounded-sm bg-secondary-200 text-primary-100 font-bold text-[18px] text-right">
                          {attr.value}
                        </div>
                      </div>
                    ))}
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
                {generating ? (
                  <div className="flex gap-3 flex-col mt-6">
                    <div className="w-full h-4 rounded animate-pulse bg-primary-200" />
                    <div className="w-full h-4 rounded animate-pulse bg-primary-200" />
                    <div className="w-full h-4 rounded animate-pulse bg-primary-200" />
                    <div className="w-full h-4 rounded animate-pulse bg-primary-200" />
                    <div className="w-3/4 h-4 rounded animate-pulse bg-primary-200" />
                  </div>
                ) : (
                  profile && (
                    <p className="text-[20px] leading-[27px] opacity-50 font-semibold mt-0.5">
                      {profile.bio}
                    </p>
                  )
                )}
                <div className="h-20" />
                {profile && <BotChat profile={profile} nft={nft} />}
              </div>
            </div>
          </div>
        )
      )}
    </main>
  );
};

export default ProfileId;
