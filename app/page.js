import Image from "next/image";
import PropertyTabs from "@/components/Filters/PropertyTabs";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans dark:bg-black">
      <div className="mt-28">
        <PropertyTabs />
      </div>
    </div>
  );
}
