import Image from "next/image";
import "../styles/Section3.css";

const Section3 = () => {
  return (
    <div className="relative w-full" style={{ position: "relative" }}>
      <Image
        src="/section3.jpg"
        alt="Mechanicrew recruitment banner section 3"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        style={{
          width: "100%",
          height: "auto",
        }}
      />

      <div className="absolute-box">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZPT1nBkyv3Y?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Section3;
