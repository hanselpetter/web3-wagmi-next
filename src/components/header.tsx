import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ConnectButton = dynamic(() => import("./connectButton"), { ssr: false });

const Header = () => {
  return (
    <div className="flex items-center justify-between py-2 lg:py-6 px-4 lg:px-9 bg-primary-100 fixed left-0 top-0 w-full z-50">
      <div className="">
        <Link href={"/"}>
          <div className="relative w-[120px] lg:w-[180px] h-8 lg:h-12">
            <Image src={"/images/logo.svg"} fill alt="" />
          </div>
        </Link>
      </div>
      <div className="">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
