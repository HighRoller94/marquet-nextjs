import Image from "next/image";
import { Sponsors } from "./SponsorsList";

const SponsorsComponent = () => {
  return (
    <div className="grid grid-cols-4 md:flex items-center justify-between w-full px-4 md:gap-x-16 mb-8 max-w-[1250px] mx-auto text-center gap-x-2">
      {Sponsors?.map((feature, i) => (
        <div className="relative w-[75px] md:w-[110px] h-[75px] md:h-[110px] opacity-20 hover:opacity-30 transition" key={i}>
          <Image 
            src={feature.src}
            fill
            alt="FeatureLogo"
            />
        </div>
      ))}
    </div>
  );
};

export default SponsorsComponent;
