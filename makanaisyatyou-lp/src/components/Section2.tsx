import Image from "next/image";
import "../styles/Section2.css";

const Section2 = () => {
  return (
    <div className="relative w-full" style={{ position: "relative" }}>
      {/* 画像コンテナ */}
      <Image
        src="/section2.jpg"
        alt="Mechanicrew recruitment banner section 2"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        style={{ width: "100%", height: "auto" }}
      />
      <div
        className="responsive-box"
        style={{
          position: "absolute",
          top: "66.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "83%",
          height: "15%",
        }}
      >
        <a
          href="https://lin.ee/2yq8IoY"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Section2;
