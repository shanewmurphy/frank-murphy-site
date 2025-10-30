import Image from "next/image";
export default function TestImage() {
  return (
    <div>
      <div>
        <Image
          src="/property-imgs/house_01.png"
          alt="Test House"
          width={400}
          height={300}
          className="object-cover"
        />
      </div>
    </div>
  );
}
