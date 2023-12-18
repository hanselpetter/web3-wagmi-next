import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TopArrow } from "./svgIcons";
import { generateText } from "../utils/generateText";
import { Chat, NftDetail, UserProfile } from "../utils/type";

interface Bot {
  profile: UserProfile;
  nft: NftDetail;
}

const BotChat: FC<Bot> = ({ profile, nft }) => {
  const [prompt, setPrompt] = useState("");
  const [waiting, setWating] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      const { scrollHeight, clientHeight } = messagesContainerRef.current;

      // Calculate the total height of the content, including padding and margins
      const totalHeight = scrollHeight - clientHeight + 200;

      // Set scrollTop to the total height to scroll to the bottom
      messagesContainerRef.current.scrollTop = totalHeight;
    }
  };

  const [charts, setCharts] = useState<Chat[]>([
    {
      role: "ai",
      content: "Hey how it going?",
    },
  ]);

  const handleRequest = async () => {
    if (prompt.trim() === "") return;
    let old = charts;
    old.push({
      role: "user",
      content: prompt,
    });
    setCharts(old);
    setPrompt("");
    scrollToBottom();
    setWating(true);
    const res = await generateText({
      topic: `You are a helpful assistant. You have ${nft.attributes
        .map((item: any) => `${item.key || item.trait_type}: ${item.value}`)
        .join(", ")}.Your name is ${profile.name.firstName} ${
        profile.name.lastName
      }. Your bio ${profile.bio}.`,
      prompt,
    });
    if (res) {
      old.push({
        role: "ai",
        content: res,
      });
    }
    setCharts(old);
    console.log(res);
    setWating(false);
    scrollToBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, [charts]);

  return (
    <div className="rounded-[10px] border-2 bg-white border-black overflow-hidden">
      <div className="p-3 bg-primary-300 text-[20px] font-bold text-white/50">
        Chat
      </div>
      <div className="h-[520px] relative rounded-[10px]">
        <div
          ref={messagesContainerRef}
          className="h-[calc(100%-80px)] overflow-y-auto custom-scrollbar pl-8 pr-6 mr-2 py-4 my-3"
        >
          {charts.map((item, key) => (
            <div className="flex gap-3 w-full mb-9" key={key}>
              {item.role === "ai" ? (
                <>
                  <div className="w-11 h-11 overflow-hidden border border-white shadow-active relative rounded-full">
                    <Image
                      src={nft.image.extraSmall}
                      fill
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[calc(100%-56px)]">
                    <p className="font-bold text-[20px] text-primary-80 leading-6">
                      {profile.name.firstName}
                    </p>
                    <p className="text-[20px] text-primary-80 leading-6">
                      {charts.length === key + 1 && waiting ? (
                        <div className="w-[120px] h-5 animate-pulse bg-primary-50 rounded" />
                      ) : (
                        item.content
                      )}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-11 h-11 overflow-hidden border border-white shadow-active relative rounded-full">
                    <Image
                      src="/images/default-avatar.png"
                      fill
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                  <div className="w-[calc(100%-56px)]">
                    <p className="font-bold text-[20px] text-primary-80 leading-6">
                      You
                    </p>
                    <p className="text-[20px] text-primary-80 leading-6">
                      {item.content}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="absolute left-8 w-[calc(100%-64px)] bottom-6">
          <input
            className="rounded-[10px] w-full border-2 border-black/30 bg-primary-50 tetxt-[20px] font-semibold leading-[27px] placeholder:text-black/10 pr-12 py-2 pl-4"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevents the default behavior (e.g., form submission)
                handleRequest();
              }
            }}
            placeholder="Message Clive Mcduck"
          />
          <button
            className="absolute border-2 border-black/30 rounded-[10px] bg-[#A6A6A6] right-2 py-2 px-2.5 top-1.5"
            onClick={handleRequest}
          >
            <TopArrow />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BotChat;
