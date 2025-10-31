import Image from "next/image";
import PropertyTabs from "@/components/Filters/PropertyTabs";

export default function Home() {
  return (
    <div className="lg:w-[90vw] xl:w-[80vw] 2xl:w-[60vw] xs:w-[90vw] mx-auto font-sans dark:bg-black">
      <div className="mt-28">
        <PropertyTabs />
      </div>
    </div>
  );
}
