import Heading1 from "@component/components/Heading1";
import Heading2 from "@component/components/Heading2";
import Link from "next/link";
import { ReactElement } from "react";
import Image from "next/image";

export default function Home(): ReactElement {
  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-center">
      <div className="pb-8">
        <Image
          src="/pepe.jpg"
          alt="pepe"
          height={150}
          width={150}
          className="rounded-full"
        ></Image>
      </div>

      <div className="font-semibold text-3xl text-white pb-2">
        <p> &#63743; WWDC23</p>
      </div>

      <div>
        <p className="font-medium text-white pb-2">
          Apple Worldwide Developers <br /> Conference. Join us online <br />
          June 5-9.
        </p>
      </div>

      <div>
        <p className="text-blue-700">Learn More &gt;</p>
      </div>
    </div>
  );
}
