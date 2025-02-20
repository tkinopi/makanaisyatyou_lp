import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section5 from "../components/Section5";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section2 />
      <Section5 />
      <Section2 />
    </main>
  );
}
