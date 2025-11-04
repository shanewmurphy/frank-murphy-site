import Image from "next/image";
import PropertyTabs from "@/components/Filters/PropertyTabs";

export default function Home() {
  return (
    <div className="xl:w-[80vw] lg:w-[80vw] md:w-[90vw] max-sm:w-[95vw] mx-auto font-sans dark:bg-black">
      <div className="mt-28">
        <PropertyTabs />
      </div>
    </div>
  );
}
