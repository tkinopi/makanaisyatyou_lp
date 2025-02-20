import Image from "next/image";

const Section5 = () => {
  return (
    <div className="relative w-full">
      <Image
        src="/section5.jpg"
        alt="Mechanicrew recruitment banner section 5"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default Section5;
