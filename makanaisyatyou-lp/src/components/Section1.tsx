import Image from "next/image";

const Section1 = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/section1.jpg"
        alt="Mechanicrew recruitment banner section 1"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Section1;
