import Image from "next/image";
import { Sponsors } from "./SponsorsList";

const SponsorsComponent = () => {
  return (
    <div className="flex items-center justify-between w-full gap-x-16 mt-8 mb-8 max-w-[1250px] mx-auto">
      {Sponsors?.map((feature, i) => (
        <div className="relative w-[110px] h-[110px] opacity-20 hover:opacity-30 transition">
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
