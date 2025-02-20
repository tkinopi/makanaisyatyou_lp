import Image from "next/image";

const Section6 = () => {
  return (
    <div className="relative w-full h-auto">
      <Image
        src="/section6.jpg"
        alt="Mechanicrew recruitment banner section 6"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto block"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Section6;
